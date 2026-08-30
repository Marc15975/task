import { Router } from "express";
import authRoutes from "./auth.routes";
import userRoutes from "./users.routes"

const router: Router = Router();

router.use("/auth", authRoutes);
router.use("/user", userRoutes);

export default router;
