const foodModel = require("../models/foodModel");

// addFood Controller
exports.addFood = async (req, res) => {
  try {
    const foodData = req.body;
    const food = new foodModel(foodData);
    await food.save();
    res.status(201).json({
      status: "success",
      message: "Food Added successfully",
      data: foodData,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Data not inserted",
      error: error.message,
    });
  }
};

// getAllFoods Controller
exports.getAllFoods = async (req, res) => {
  try {
    const foodData = await foodModel.find();
    res.status(200).json({
      status: "success",
      data: foodData,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Can't get the data",
      error: error.message,
    });
  }
};

// getFoodById Controller
exports.getFoodById = async (req, res) => {
  try {
    const foodId = req.params.id;
    const foodData = await foodModel.findById(foodId);
    res.status(200).json({
      status: "success",
      data: foodData,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Can't get the data",
      error: error.message,
    });
  }
};

// updateFood Controller
exports.updateFood = async (req, res) => {
  try {
    const foodId = req.params.id;
    const updatedFoodData = req.body;

    const updatedFood = await foodModel.findByIdAndUpdate(
      foodId,
      updatedFoodData,
      { new: true }
    );

    if (!updatedFood) {
      return res.status(404).json({
        status: "fail",
        message: "Food not found",
      });
    }
    res.status(200).json({
      status: "success",
      message: "Food updated successfully",
      data: updatedFood,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Can't update the food",
      error: error.message,
    });
  }
};

// deleteFood Controller
exports.deleteFood = async (req, res) => {
  try {
    const foodId = req.params.id;

    const deletedFood = await foodModel.findByIdAndDelete(foodId);

    if (!deletedFood) {
      return res.status(404).json({
        status: "fail",
        message: "Food not found",
      });
    }
    res.status(204).end();
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Can't delete the food",
      error: error.message,
    });
  }
};
