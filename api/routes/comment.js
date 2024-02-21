import express from "express";
import {
  getComments,
  addComment,
  updateComment,
  deleteComment,
} from "../controllers/comment.js";

import { isAdminUser, isRegularUser, isCommentOwner } from "../middleware/auth.js";

const router = express.Router();

/*
// Middleware to check if the user is an administrator
const isAdmin = (req, res, next) => {
  // Assuming you have user information stored in req.user
  if (req.user && req.user.role === "admin") {
    next(); // Continue to the next middleware/route handler
  } else {
    res.status(403).json({ message: "Permission denied" });
  }
};

// Middleware to check if the user is a regular user
const isRegularUser = (req, res, next) => {
  // Assuming you have user information stored in req.user
  if (req.user && req.user.role === "regular") {
    next(); // Continue to the next middleware/route handler
  } else {
    res.status(403).json({ message: "Permission denied" });
  }
};
*/

// Get all comments
router.get("/", getComments);

// Add a new comment (only regular users)
router.post("/", isRegularUser, addComment);

// Update a comment (only comment owner)
router.put("/:id", isCommentOwner, updateComment);

// Delete a post (only administrators)
router.delete("/:id", isCommentOwner, isAdminUser, deleteComment);

export default router;
