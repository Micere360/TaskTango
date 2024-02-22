// controllers/categoriesController.js
const Category = require('../models/Category');
const { successResponse, errorResponse } = require('../utils/response');

// Get all categories
const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    successResponse(res, categories);
  } catch (error) {
    errorResponse(res, 'Error fetching categories');
  }
};

// Get a specific category by ID
const getCategoryById = async (req, res) => {
  const categoryId = req.params.categoryId;
  try {
    const category = await Category.findById(categoryId);
    if (!category) {
      return errorResponse(res, 'Category not found', 404);
    }
    successResponse(res, category);
  } catch (error) {
    errorResponse(res, 'Error fetching category');
  }
};

// Create a new category
const createCategory = async (req, res) => {
  const { name } = req.body;
  const newCategory = new Category({ name });

  try {
    const savedCategory = await newCategory.save();
    successResponse(res, savedCategory, 'Category created successfully');
  } catch (error) {
    errorResponse(res, 'Error creating category');
  }
};

// Update a category by ID
const updateCategory = async (req, res) => {
  const categoryId = req.params.categoryId;
  const { name } = req.body;

  try {
    const updatedCategory = await Category.findByIdAndUpdate(
      categoryId,
      { name },
      { new: true } // Return the updated category
    );

    if (!updatedCategory) {
      return errorResponse(res, 'Category not found', 404);
    }

    successResponse(res, updatedCategory, 'Category updated successfully');
  } catch (error) {
    errorResponse(res, 'Error updating category');
  }
};

// Delete a category by ID
const deleteCategory = async (req, res) => {
  const categoryId = req.params.categoryId;

  try {
    const deletedCategory = await Category.findByIdAndDelete(categoryId);

    if (!deletedCategory) {
      return errorResponse(res, 'Category not found', 404);
    }

    successResponse(res, deletedCategory, 'Category deleted successfully');
  } catch (error) {
    errorResponse(res, 'Error deleting category');
  }
};

module.exports = {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
};
