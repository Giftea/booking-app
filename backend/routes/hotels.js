import express from "express";
import {
  createHotel,
  deleteHotel,
  getAllHotel,
  getSingleHotel,
  updateHotel,
} from "../controllers/hotels.js";
import { verifyAdmin } from "../utils/verify.js";

const router = express.Router();

router.post("/", verifyAdmin, createHotel);
router.put("/:id", verifyAdmin, updateHotel);
router.get("/:id", getSingleHotel);
router.get("/", getAllHotel);
router.delete("/:id",verifyAdmin, deleteHotel);

export default router;
