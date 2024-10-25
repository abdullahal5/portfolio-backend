import mongoose from "mongoose";
import { ISkill } from "./skills.interface";

const { Schema } = mongoose;

const skillSchema = new Schema<ISkill>(
  {
    name: {
      type: String,
      required: true,
    },
    tag: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    progress: {
      type: Number,
      required: true,
      min: 0,
      max: 100,
    },
  },
  {
    timestamps: true,
  }
);

export const SkillModel = mongoose.model<ISkill>("Skill", skillSchema);
