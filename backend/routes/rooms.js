import express from "express";
import { createRoom, deleteRoom, getAllRoom, getSingleRoom, updateRoom } from "../controllers/rooms.js";
import { verifyAdmin } from "../utils/verify.js";

const router = express.Router();

router.post("/:hotelId", verifyAdmin, createRoom);
router.put("/:id", verifyAdmin, updateRoom);
router.get("/:id", getSingleRoom);
router.get("/", getAllRoom);
router.delete("/:id/:hotelId",verifyAdmin, deleteRoom);

export default router;
