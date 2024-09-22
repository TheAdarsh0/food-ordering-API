const express = require("express");
const {
  creatResturantController,
  getAllResturantController,
  getResturantById,
  deleteResturnatController,
} = require("../controllers/resturentController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();
router.post("/create", authMiddleware, creatResturantController);
router.get("/getall", getAllResturantController);
router.get("/get/:id", getResturantById);
router.delete("/delete/:id", authMiddleware, deleteResturnatController);
module.exports = router;
