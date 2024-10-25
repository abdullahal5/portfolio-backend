import { Router } from "express";
import { UserRoutes } from "../modules/user/user.route";
import { SkillRoutes } from "../modules/skills/skills.route";

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
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
