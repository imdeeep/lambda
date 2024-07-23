import express from 'express'
import connectDB from './config/db.js'
import bodyParser from "body-parser"
import cookieParser from "cookie-parser"
import session from "express-session"
import cors from "cors"
const port = process.env.PORT || 3000
import userRoute from "./routes/users.js"
import chatRoute from "./routes/chat.js"
import { Server } from 'socket.io'
import { createCheckSchema } from 'express-validator/lib/middlewares/schema.js'
// import { createUser } from './seeders/user.js'
export const envMode = process.env.NODE_ENV.trim() || "PRODUCTION";
import {createServer} from "http"
import { CHAT_JOINED, CHAT_LEAVED, NEW_MESSAGE, NEW_MESSAGE_ALERT, ONLINE_USERS, START_TYPING, STOP_TYPING } from './constants/events.js'
import { v4 as uuid } from 'uuid'
import { getSockets } from './lib/helper.js'

const app = express();
const server = createServer(app);
const io = new Server(server,{});

// Connecting to the database 
connectDB();

// Middlewares 
app.use(express.json())
app.use(cors({
  origin: "http://localhost:3000", // Frontend URL
  credentials: true, 
}));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: process.env.SECURITY, sameSite: 'Lax' } // Change secure to true in production
}));

// Routes :-
app.get('/', (req, res) => {
  res.send('Hello Lambda')
})
app.use('/user',userRoute); // Authroutes
app.use('/chat',chatRoute); // Chatroutes 

// Faker :- 
// createUser(10)

io.use((socket, next) => {
  cookieParser()(
    socket.request,
    socket.request.res,
    async (err) => await socketAuthenticator(err, socket, next)
  );
});

io.on("connection", (socket) => {
  const user = socket.user;
  userSocketIDs.set(user._id.toString(), socket.id);

  socket.on(NEW_MESSAGE, async ({ chatId, members, message }) => {
    const messageForRealTime = {
      content: message,
      _id: uuid(),
      sender: {
        _id: user._id,
        name: user.name,
      },
      chat: chatId,
      createdAt: new Date().toISOString(),
    };

    const messageForDB = {
      content: message,
      sender: user._id,
      chat: chatId,
    };

    const membersSocket = getSockets(members);
    io.to(membersSocket).emit(NEW_MESSAGE, {
      chatId,
      message: messageForRealTime,
    });
    io.to(membersSocket).emit(NEW_MESSAGE_ALERT, { chatId });

    try {
      await Message.create(messageForDB);
    } catch (error) {
      throw new Error(error);
    }
  });

  socket.on(START_TYPING, ({ members, chatId }) => {
    const membersSockets = getSockets(members);
    socket.to(membersSockets).emit(START_TYPING, { chatId });
  });

  socket.on(STOP_TYPING, ({ members, chatId }) => {
    const membersSockets = getSockets(members);
    socket.to(membersSockets).emit(STOP_TYPING, { chatId });
  });

  socket.on(CHAT_JOINED, ({ userId, members }) => {
    onlineUsers.add(userId.toString());

    const membersSocket = getSockets(members);
    io.to(membersSocket).emit(ONLINE_USERS, Array.from(onlineUsers));
  });

  socket.on(CHAT_LEAVED, ({ userId, members }) => {
    onlineUsers.delete(userId.toString());

    const membersSocket = getSockets(members);
    io.to(membersSocket).emit(ONLINE_USERS, Array.from(onlineUsers));
  });

  socket.on("disconnect", () => {
    userSocketIDs.delete(user._id.toString());
    onlineUsers.delete(user._id.toString());
    socket.broadcast.emit(ONLINE_USERS, Array.from(onlineUsers));
  });
  
});

server.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
