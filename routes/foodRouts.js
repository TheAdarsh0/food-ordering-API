const express = require("express");

const authMiddleware = require("../middlewares/authMiddleware");
const {
  createFoodController,
  getAllFoodsController,
  getSingleFoodController,
  getFoodByResturantController,
  updateFoodController,
  deleteFoodController,
  placeOrderController,
  orderStatusController,
} = require("../controllers/foodController");
const adminMiddleware = require("../middlewares/adminMiddleware");
const router = express.Router();
router.post("/create", authMiddleware, createFoodController);
router.get("/getall", getAllFoodsController);
router.get("/get/:id", getSingleFoodController);
router.get("/getres/:id", getFoodByResturantController);
router.put("/update/:id", authMiddleware, updateFoodController);
router.delete("/delete/:id", authMiddleware, deleteFoodController);
router.post("/placeorder", authMiddleware, placeOrderController);
router.post(
  "/orderStatus/:id",
  authMiddleware,
  adminMiddleware,
  orderStatusController
);
module.exports = router;
