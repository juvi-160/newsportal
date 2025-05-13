const express = require("express");
const cors = require("cors");
const sequelize = require("./config/db");
const PORT = process.env.PORT;

//models
const News = require("./models/newsModel");
const User = require("./models/userModel"); 
const Category = require("./models/categoryModel");

const newsRoutes = require("./routes/newsRoutes");
const userRoutes = require("./routes/userRoutes")
const categoryRoutes = require("./routes/categoryRoutes")

const app = express();

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
app.use(cors({  origin: 'http://localhost:5173', // Your frontend URL
  credentials: true,
}));
app.use(express.urlencoded({
  extended:true
}))
app.use('/uploads', express.static('uploads')) // Serve static files from the 'uploads' directory

//routes
app.use('/news', newsRoutes)
app.use('/admin',userRoutes)
app.use("/categories", categoryRoutes);

app.get("/", (req, res) => {
  res.send("hello world");
});

async function syncDb(){

  await sequelize.sync({ alter: true });
  console.log('All models were synchronized successfully.');
}
//syncDb()

app.listen(PORT, () => {
  console.log(`app is listening on port https://localhost:${PORT}`);
});
