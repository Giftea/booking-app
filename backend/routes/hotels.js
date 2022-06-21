import express from "express";
import {
  createHotel,
  deleteHotel,
  getAllHotel,
  getSingleHotel,
  updateHotel,
  countByCity
} from "../controllers/hotels.js";
import { verifyAdmin } from "../utils/verify.js";

const router = express.Router();

router.post("/", verifyAdmin, createHotel);
router.put("/:id", verifyAdmin, updateHotel);
router.delete("/:id",verifyAdmin, deleteHotel);

router.get("/find/:id", getSingleHotel);
router.get("/", getAllHotel);

router.get("/countByCity", countByCity);
router.get("/countByType", getAllHotel);


export default router;
