import express from "express";
import { ProjectController } from "./projects.controller";

const router = express.Router();

router.post("/create-project", ProjectController.createProject);
router.get("/get-all-projects", ProjectController.getAllProjects);
router.get("/get-project/:id", ProjectController.getProjectById);
router.put("/update-project/:id", ProjectController.updateProjectById);
router.delete("/delete-project/:id", ProjectController.deleteProjectById);

export const ProjectRoutes = router;
