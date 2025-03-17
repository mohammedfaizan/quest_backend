import mongoose from "mongoose";

const QuestSchema = new mongoose.Schema(
  {
    name: String,
    completedDays: { type: Map, of: Boolean, default: {} },
  },
  { timestamps: true }
);

const Quest = mongoose.model("Quest", QuestSchema);

export default Quest;
