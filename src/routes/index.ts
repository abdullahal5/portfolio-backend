import { Router } from "express";
import { UserRoutes } from "../modules/user/user.route";
import { SkillRoutes } from "../modules/skills/skills.route";
import { ProjectRoutes } from "../modules/projects/projects.route";

const router = Router();

const moduleRoutes = [
  {
    path: "/auth",
    route: UserRoutes,
  },
  {
    path: "/skill",
    route: SkillRoutes,
  },
  {
    path: "/projects",
    route: ProjectRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
