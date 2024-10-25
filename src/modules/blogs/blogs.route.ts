import express from "express";
import { BlogController } from "./blogs.controller";

const router = express.Router();

router.post("/create-blog", BlogController.createArticle);
router.get("/all-blog", BlogController.getAllArticles);
router.get("/sinlge-blog/:id", BlogController.getArticleById);
router.put("/update-blog/:id", BlogController.updateArticleById);
router.delete("/delete-blog/:id", BlogController.deleteArticleById);

export const BlogRoutes = router;
