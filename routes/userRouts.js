const express = require("express");
const {
  getUserContoller,
  updateUserController,
  userResetPassword,
  updatePasswordController,
  deleteProfileController,
} = require("../controllers/userController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();
router.get("/getuser", authMiddleware, getUserContoller);
router.put("/updateuser", authMiddleware, updateUserController);
router.post("/updatepassword", authMiddleware, updatePasswordController);
router.post("/resetpassword", authMiddleware, userResetPassword);
router.delete("/deleteuser/:id", authMiddleware, deleteProfileController);
module.exports = router;
