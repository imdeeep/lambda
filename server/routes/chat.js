import express from "express";
const app = express.Router();
import { newGroupChat ,getMyChats, getMyGroups,addMembers, removeMember, leaveGroup, sendAttachments, getChatDetails, renameGroup, deleteChat, getMessages} from "../controllers/chat.js";
import authMiddleware from "../middlewares/auth.js";
import { sendAttachmentsMulter } from "../middlewares/multer.js";

app.use(authMiddleware);

// GroupChat
app.post("/new",newGroupChat);

// GetMyChats
app.get("/my",getMyChats)
    
// GetMyGroups
app.get("/my-groups",getMyGroups)

// AddMembers
app.put("/addmembers",addMembers);

// Remove members
app.put("/remove-members",removeMember);

// LeaveGroup
app.put("/leave/:id",leaveGroup);

// Send Attcahments 
app.post("/message",sendAttachmentsMulter,sendAttachments);

// Get Chat Details
app.route("/:id").get(getChatDetails).put(renameGroup).delete(deleteChat);

// Get Messages
app.get("/message/:id",getMessages);
export default app;