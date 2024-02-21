/*
import express from "express";
import { login,register,logout } from "../controllers/auth.js";

const router = express.Router()

router.post("/login", login)
router.post("/register", register)
router.post("/logout", logout)


export default router
*/

import express from "express";
import { login, register, logout } from "../controllers/auth.js";
import { isRegularUser, isAdminUser } from "../middleware/auth.js";


const router = express.Router();

router.post("/login", login);
router.post("/register", register);
router.post("/logout", logout);

// Route accessible to regular users
router.get("/regular-user-route", isRegularUser, (req, res) => {
  res.json({ message: "Regular user route" });
});

// Route accessible to admins
router.get("/admin-route", isAdminUser, (req, res) => {
  res.json({ message: "Admin route" });
});

export default router;
