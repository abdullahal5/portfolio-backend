import express from "express";
import { UserController } from "./user.controller";

const router = express.Router();

router.post("/login", UserController.loginUser);

export const UserRoutes = router;
