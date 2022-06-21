import express from "express";
import {
  deleteUser,
  getAllUser,
  getSingleUser,
  updateUser,
} from "../controllers/user.js";
import { verifyUser, verifyAdmin } from "../utils/verify.js";

const router = express.Router();

router.put("/:id", verifyUser, updateUser);
router.get("/:id", verifyUser, getSingleUser);
router.get("/", verifyAdmin, getAllUser);
router.delete("/:id", verifyUser, deleteUser);

export default router;
