import mongoose from "mongoose";
import { IArticle } from "./blogs.interface";

const articleSchema = new mongoose.Schema<IArticle>(
  {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    coverImage: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const ArticleModel = mongoose.model<IArticle>("Blog", articleSchema);
