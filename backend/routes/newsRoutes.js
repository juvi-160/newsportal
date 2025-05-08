const express = require("express");
const router = express.Router();
const {
  createNews,
  getAllNews,
  getNewsById,
  updateNews,
  deleteNews,
  getNewsCounts,
} = require("../controllers/newsController");
const upload = require('../middlleware/multer')

// Create news
router.post("/create", upload.single("image"), createNews);

// Get all news
router.get("", getAllNews);

//get count
router.get("/count", getNewsCounts);

//Get news By Id
router.get("/:id", getNewsById);

// Update news
router.put("/:id", upload.single("image"), updateNews);

//delete news
router.delete("/:id", deleteNews);

module.exports = router;
