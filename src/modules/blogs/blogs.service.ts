import AppError from "../../errors/AppError";
import httpStatus from "http-status";
import { IArticle } from "./blogs.interface";
import { ArticleModel } from "./blogs.model";

const createArticle = async (payload: IArticle) => {
  const { title, subtitle, coverImage, category, content } = payload;

  if (!title || !subtitle || !coverImage || !category || !content) {
    throw new AppError(httpStatus.BAD_REQUEST, "Please fill all the fields");
  }

  const newArticle = await ArticleModel.create(payload);
  return newArticle;
};

const getAllArticles = async () => {
  const articles = await ArticleModel.find({});
  return articles;
};

const getArticleById = async (id: string) => {
  const article = await ArticleModel.findById(id);
  if (!article) {
    throw new AppError(httpStatus.NOT_FOUND, "Article not found");
  }
  return article;
};

const updateArticleById = async (id: string, payload: IArticle) => {
  const updatedArticle = await ArticleModel.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });

  if (!updatedArticle) {
    throw new AppError(httpStatus.NOT_FOUND, "Article not found");
  }
  return updatedArticle;
};

const deleteArticleById = async (id: string) => {
  const deletedArticle = await ArticleModel.findByIdAndDelete(id);
  if (!deletedArticle) {
    throw new AppError(httpStatus.NOT_FOUND, "Article not found");
  }
  return deletedArticle;
};

export const BlogService = {
  createArticle,
  getAllArticles,
  getArticleById,
  updateArticleById,
  deleteArticleById,
};
