const resturentModel = require("../models/resturentModel");

const creatResturantController = async (req, res) => {
  try {
    const {
      title,
      imageUrl,
      foods,
      time,
      pickup,
      delivery,
      isOpen,
      logoUrl,
      rating,
      ratingCount,
      code,
      coords,
    } = req.body;

    // validation
    if (!title || !coords) {
      return res.status(500).send({
        success: false,
        message: "Please provide title and address",
      });
    }

    const newResturant = new resturentModel({
      title,
      imageUrl,
      foods,
      time,
      pickup,
      delivery,
      isOpen,
      logoUrl,
      rating,
      ratingCount,
      code,
      coords,
    });

    await newResturant.save();

    res.status(201).send({
      success: true,
      message: "New restaurant created successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in creating restaurant API",
      error,
    });
  }
};

const getAllResturantController = async (req, res) => {
  try {
    const restaurants = await resturentModel.find({});
    if (!restaurants) {
      return res.status(404).send({
        success: false,
        message: "No resturant availible",
      });
    }
    res.status(200).send({
      success: true,
      totalCount: restaurants.length,
      restaurants,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in get all api",
      error,
    });
  }
};
const getResturantById = async (req, res) => {
  try {
    const resturantId = req.params.id;
    if (!resturantId) {
      return res.status(404).send({
        success: false,
        message: "please provid resturnat Id",
      });
    }
    const resturant = await resturentModel.findById(resturantId);
    if (!resturant) {
      return res.status(404).send({
        success: false,
        message: "No resturant availible",
      });
    }
    res.status(200).send({
      success: true,
      resturant,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in get all api",
      error,
    });
  }
};

const deleteResturnatController = async (req, res) => {
  try {
    const resturantId = req.params.id;
    if (!resturantId) {
      return res.status(404).send({
        success: false,
        message: "No resturnat found please provid resturnat Id",
      });
    }
    await resturentModel.findByIdAndDelete(resturantId);
    res.status(200).send({
      success: true,
      message: "resturnat deleted Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in delete all resturant api",
      error,
    });
  }
};
module.exports = {
  creatResturantController,
  getAllResturantController,
  getResturantById,
  deleteResturnatController,
};
