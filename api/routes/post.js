/*
import express from "express";
import { getPosts, addPost, deletePost } from "../controllers/post.js";

const router = express.Router();

router.get("/", getPosts);
router.post("/", addPost);
router.delete("/:id", deletePost);

export default router;
*/

// routes/posts.js
import express from "express";
import { getPosts, addPost, updatePost, deletePost } from "../controllers/post.js";
import { isAdminUser, isPostOwner } from "../middleware/auth.js";

const router = express.Router();

// Get all posts
router.get("/", getPosts);

// Add a new post (only regular users)
router.post("/", addPost);

// Update a post (only post owner)
router.put("/:id", isPostOwner, updatePost);

// Delete a post (only administrators)
router.delete("/:id", isPostOwner, isAdminUser, deletePost);

export default router;
