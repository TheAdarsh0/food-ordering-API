const express = require("express");
const colors = require("colors");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const { connect } = require("mongoose");
const connectDb = require("./config/db");

dotenv.config();

connectDb();

const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// route
app.use("/api/v1/test", require("./routes/testRouts"));
app.use("/api/v1/auth", require("./routes/authRouts"));
app.use("/api/v1/user", require("./routes/userRouts"));
app.use("/api/v1/resturent", require("./routes/resturentRouts"));
app.use("/api/vi/category", require("./routes/categoryRouts"));
app.use("/api/vi/food", require("./routes/foodRouts"));

app.get("/", (req, res) => {
  return res.status(200).send("<h1> welcome to food server </h>");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server start on ${PORT}.`.white.bgMagenta);
});
