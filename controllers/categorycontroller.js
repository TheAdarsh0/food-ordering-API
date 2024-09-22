const categoryModel = require("../models/categoryModel");

const createCatController = async (req, res) => {
  try {
    const { title, imageUrl } = req.body;
    if (!title) {
      return res.status(500).send({
        success: false,
        message: "please provide category title",
      });
    }
    const newCategory = new categoryModel({ title, imageUrl });
    await newCategory.save(); // Corrected from 'seve' to 'save'
    res.status(200).send({
      success: true,
      message: "category created",
      newCategory,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in creating category in API",
      error,
    });
  }
};
const getAllCatController = async (req, res) => {
  try {
    const categorys = await categoryModel.find({});
    if (!categorys) {
      return res.status(404).send({
        success: false,
        message: "No category found availible",
      });
    }
    res.status(200).send({
      success: true,
      totalCount: categorys.length,
      categorys,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "category is not found",
      error,
    });
  }
};

const updateAllCatController = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, imageUrl } = req.body;

    // Find and update the category
    const category = await categoryModel.findByIdAndUpdate(
      id,
      { title, imageUrl },
      { new: true } // Return the updated document
    );

    // If category not found
    if (!category) {
      return res.status(404).send({
        success: false,
        message: "Category not found",
      });
    }

    // Success response
    res.status(200).send({
      success: true,
      message: "Category updated successfully",
      category,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error updating category",
      error,
    });
  }
};
const deleteCatController = async (req, res) => {
  try {
    await categoryModel.findByIdAndDelete(req.params.id);
    return res.status(200).send({
      success: true,
      message: "Your cat has been deleted",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Erorr In Delete cat API",
      error,
    });
  }
};

module.exports = {
  createCatController,
  getAllCatController,
  updateAllCatController,
  deleteCatController,
};
