const express = require("express");

const authMiddleware = require("../middlewares/authMiddleware");
const {
  createCatController,
  getAllCatController,
  updateAllCatController,
  deleteCatController,
} = require("../controllers/categorycontroller");

const router = express.Router();
router.post("/create", authMiddleware, createCatController);
router.get("/getAll", getAllCatController);
router.put("/update/:id", authMiddleware, updateAllCatController);
router.delete("/delete/:id", authMiddleware, deleteCatController);
module.exports = router;
