import express from "express";
const app = express.Router();
import { newGroupChat ,getMyChats, getMyGroups,addMembers, removeMember, leaveGroup} from "../controllers/chat.js";
import authMiddleware from "../middlewares/auth.js";

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
app.put("/leave",leaveGroup);

export default app;