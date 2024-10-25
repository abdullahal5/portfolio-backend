import express from "express";
import { SkillController } from "./skills.controller";

const router = express.Router();

router.post("/create-skill", SkillController.postSkill);
router.get("/get-all-skill", SkillController.getAllSkills);
router.get("/get-single-skill/:id", SkillController.getSkillById);
router.put("/update-skill/:id", SkillController.updateSkillById);
router.delete("/delete-skill/:id", SkillController.deleteSkillById);

export const SkillRoutes = router;
