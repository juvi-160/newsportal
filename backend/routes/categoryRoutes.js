const express = require("express");
const router = express.Router();
const Category = require("../models/categoryModel");

//create
router.post("/create", async (req, res) => {
  try {
    const category = await Category.create({ name: req.body.name });
    res.json({ success: true, category });
  } catch (error) {
    res.json({ sucess: false, message: error.message });
  }
});

// Get all categories
router.get("/", async (req, res) => {
  try {
    const categories = await Category.findAll({
      order: [['createdAt', 'DESC']] 
    });
    res.json({ 
      success: true, 
      categories,
      count: categories.length 
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: error.message 
    });
  }
});

// Get category count
router.get("/count", async (req, res) => {
  try {
    // Just get the total count of categories
    const count = await Category.count();
    
    res.json({
      success: true,
      count
    });
  } catch (error) {
    console.error('Error getting category count:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to get category count',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});


// Update
router.put("/:id", async (req, res) => {
  try {
    const category = await Category.findByPk(req.params.id);
    if (!category)
      return res
        .status(404)
        .json({ success: false, message: "Category not found" });

    category.name = req.body.name;
    await category.save();
    res.json({ success: true, category });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
});

// Delete
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Category.destroy({ where: { id: req.params.id } });
    res.json({ success: deleted > 0 });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
});

module.exports = router;
