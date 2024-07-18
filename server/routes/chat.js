import express from "express";
const app = express.Router();
import { newGroupChat ,getMyChats, getMyGroups,addMembers} from "../controllers/chat.js";

// GroupChat
app.post("/new",newGroupChat);

// GetMyChats
app.get("/my",getMyChats)
    
// GetMyGroups
app.get("/my-groups",getMyGroups)

// AddMembers
app.put("/addmembers",addMembers);

export default app;
