import express from 'express'
import connectDB from './config/db.js'
import bodyParser from "body-parser"
import cookieParser from "cookie-parser"
import session from "express-session"
import cors from "cors"
const app = express()
const port = process.env.PORT || 3000
import userRoute from "./routes/users.js"
import chatRoute from "./routes/chat.js"
// import { createUser } from './seeders/user.js'
export const envMode = process.env.NODE_ENV.trim() || "PRODUCTION";

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

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
