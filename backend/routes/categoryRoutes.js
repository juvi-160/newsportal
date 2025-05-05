const express = require("express");
const router = express.Router();
const Category = require("../models/categoryModel");

//create
router.post("/", async (req, res) => {
  try {
    const category = await Category.create({ name: req.body.name });
    res.json({ sucess: true, category });
  } catch (error) {
    res.json({ sucess: false, message: error.message });
  }
});

//read all
router.get("/", async (req, res) => {
  try {
    const categories = await Category.findAll();
    res.json({ success: true, categories });
  } catch (error) {
    res.json({ success: false, message: error.message });
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
