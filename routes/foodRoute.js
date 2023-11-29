const express = require("express");
const {
  addFood,
  getAllFoods,
  getFoodById,
  updateFood,
  deleteFood,
} = require("../controllers/foodController");
const router = express.Router();

router.post("/foods", addFood);
router.get("/foods", getAllFoods);
router.get("/foods/:id", getFoodById);
router.put("/foods/:id", updateFood);
router.delete("/foods/:id", deleteFood);

module.exports = router;
