const sequelize = require('../config/db');
const News = require("../models/newsModel");

// Sync DB
sequelize
.sync({ alter: true })
.then(() => console.log("Database & tables synced!"))
.catch((err) => console.error("Error syncing database:", err.message));

//create function
const createNews = async (req, res) => {
  try {
    const { title, publisherName, description,  categoryId, publishedAt } = req.body;

    const newsData = {
      title,
      publisherName,
      description,
      image: req.file ? req.file.filename : null,
      categoryId,
      publishedAt: publishedAt || Date.now(),
    };

    const news = await News.create(newsData);
    res.status(201).json(news);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

//get all news
const getAllNews = async (req, res) => {
  try {
    const newsList = await News.findAll();
    res.json(newsList);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


//news by id
const getNewsById = async (req, res) => {
  try {
    const news = await News.findByPk(req.params.id);
    if (!news) return res.status(404).json({ error: "News not found" });
    res.json(news);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

//update news
const updateNews = async (req, res) => {
  try {
    const news = await News.findByPk(req.params.id);
    if (!news) return res.status(404).json({ error: "News not found" });

    const { title, publisherName, description,  categoryId, publishedAt } = req.body;

    const updatedData = {
      title,
      publisherName,
      description,
      categoryId,
      publishedAt: publishedAt || Date.now(),
    };

    if (req.file) {
      updatedData.image = req.file.filename;
    }

    await news.update(updatedData);
    res.json(news);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

//delete news
const deleteNews = async (req, res) => {
  try {
    const news = await News.findByPk(req.params.id);
    if (!news) return res.status(404).json({ error: "News not found" });

    await news.destroy();
    res.json({ message: "News deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


module.exports = {
  createNews,
  getAllNews,
  getNewsById,
  updateNews,
  deleteNews,
};
