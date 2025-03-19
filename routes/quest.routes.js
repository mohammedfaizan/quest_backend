import express from "express";
import { newQuest, updateQuest } from "../controllers/quest.controller.js";
import { getAllQuests } from "../controllers/quest.controller.js";
import { deleteQuest } from "../controllers/quest.controller.js";

const router = express.Router();
router.post("/quest", newQuest);
router.get("/quests", getAllQuests);
router.delete("/quest/:id", deleteQuest);
router.put("/quest/:id", updateQuest);

export default router;
