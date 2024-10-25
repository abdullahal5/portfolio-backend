import catchAsync from "../../utils/catchAsync";
import SendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import { BlogService } from "./blogs.service";

const createArticle = catchAsync(async (req, res) => {
  const article = await BlogService.createArticle(req.body);
  SendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Article created successfully",
    data: article,
  });
});

const getAllArticles = catchAsync(async (req, res) => {
  const articles = await BlogService.getAllArticles();
  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Articles retrieved successfully",
    data: articles,
  });
});

const getArticleById = catchAsync(async (req, res) => {
  const article = await BlogService.getArticleById(req.params.id);
  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Article retrieved successfully",
    data: article,
  });
});

const updateArticleById = catchAsync(async (req, res) => {
  const article = await BlogService.updateArticleById(req.params.id, req.body);
  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Article updated successfully",
    data: article,
  });
});

const deleteArticleById = catchAsync(async (req, res) => {
  await BlogService.deleteArticleById(req.params.id);
  SendResponse(res, {
     statusCode: httpStatus.OK,
     success: true,
     message: "Article deleted successfully",
     data: undefined
  });
});

export const BlogController = {
  createArticle,
  getAllArticles,
  getArticleById,
  updateArticleById,
  deleteArticleById,
};
