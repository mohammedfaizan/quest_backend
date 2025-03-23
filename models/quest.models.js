import mongoose from "mongoose";
import { Schema } from "mongoose";

const QuestSchema = new mongoose.Schema(
  {
    id: { type: String, unique: true, required: true },
    name: { type: String, required: true },
    completedDays: { type: Map, of: Number, default: {} },
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: true }
);

const Quest = mongoose.model("Quest", QuestSchema);

export default Quest;
