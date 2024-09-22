const mongoose = require("mongoose");

// schema
const categorySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Category title is required"],
    },
    imageUrl: {
      type: String,
      default:
        "https://image.shutterstock.com/image-vector/healthy-food-logo-design-combination-260nw-2398835953.jpg",
    },
  },
  { timestamps: true }
);

// export
module.exports = mongoose.model("Category", categorySchema);
