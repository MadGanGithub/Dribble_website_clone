import express from "express";
import {
  signUp,
  signIn,
  check,
} from "../controllers/controllers.js";

const router = express.Router();

router.route("/").get(check);
router.route("/signin").post(signIn);
router.route("/signup").post(signUp);

export default router;