import { model, Schema } from "mongoose";
import { IProject } from "./projects.interface";

const ProjectSchema = new Schema<IProject>(
  {
    title: {
      type: String,
      required: true,
    },
    coverImage: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    sub: {
      type: String,
      required: true,
    },
    technologies: {
      type: [String],
      required: true,
    },
    features: {
      type: [String],
      required: true,
    },
    tag: {
      type: [String],
      required: true,
    },
    githubLink: {
      type: String,
      required: true,
    },
    liveLink: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const ProjectModel = model<IProject>("Project", ProjectSchema);
