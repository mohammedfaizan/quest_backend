import mongoose from "mongoose";

const QuestSchema = new mongoose.Schema(
  {
    id: { type: String, unique: true, required: true },
    name: { type: String, required: true },
    completedDays: { type: Map, of: Boolean, default: {} },
  },
  { timestamps: true }
);

const Quest = mongoose.model("Quest", QuestSchema);

export default Quest;
