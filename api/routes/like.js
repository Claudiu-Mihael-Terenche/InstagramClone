import express from "express";
import { getLikes, addLike, deleteLike } from "../controllers/like.js";
import { isLikeOwner, isRegularUser } from "../middleware/auth.js";

const router = express.Router()

router.get("/", getLikes)
router.post("/", isRegularUser, addLike)
router.delete("/:id", isLikeOwner, deleteLike)


export default router