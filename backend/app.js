const express = require("express");
const cors = require("cors");
const dotenv = require('dotenv');
dotenv.config();
const sequelize = require("./config/db");
const PORT = process.env.PORT;
const app = express();
const bodyParser = require("body-parser");

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log("Database connected successfully!");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

testConnection();


//middleware
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({
  extended:true
}))

const newsRoutes = require("./routes/newsRoutes");
const userRoutes = require("./routes/userRoutes")
const categoryRoutes = require("./routes/categoryRoutes")

app.use('/news', newsRoutes)
app.use('/users',userRoutes)
app.use("/categories", categoryRoutes);

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(PORT, () => {
  console.log(`app is listening on port https://localhost:${PORT}`);
});
