import express from "express";
import { newQuest, updateQuest } from "../controllers/quest.controller.js";
import { getUserQuests } from "../controllers/quest.controller.js";
import { deleteQuest } from "../controllers/quest.controller.js";
import passport from "passport";

const router = express.Router();
router.post(
  "/quest",
  (req, res, next) => {
    console.log("Authenticating request...");
    next();
  },
  passport.authenticate("jwt", { session: false }),
  (req, res, next) => {
    console.log("Authentication successful, calling controller...");
    next();
  },
  newQuest
);
router.get(
  "/quests",
  passport.authenticate("jwt", { session: false }),
  getUserQuests
);
router.put("/quest/:id", updateQuest);
// router.delete("/quest/:id", deleteQuest);

export default router;
