import express from "express";
import {
  registerUser,
  authenticateUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
} from "../controllers/userControllers.js";
import { protect } from "../middleware/authenticationMiddleware.js";

const router = express.Router();

router.post("/", registerUser);
router.post("/auth", authenticateUser);
router.post("/logout", logoutUser);
router.get("/profile", protect, getUserProfile);
router.put("/profile", protect, updateUserProfile);

export default router;
