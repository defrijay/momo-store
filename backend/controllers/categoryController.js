import Category from "../models/categoryModel.js";
import asyncHandler from "../middlewares/asyncHandler.js";

// Constant for create new category
const createCategory = asyncHandler(async(req,res) => {
    try {
        // Fetch name data from request
        const{ name } = req.body;

        // Check if name not exists 
        if (!name) {
            // Return the response to the request with an error in JSON format
            return res.json({error: "Name is required"});
        }

        // Check if category is exists
        if (existingCategory) {
            // Return the response to the request with an error in JSON format
            return res.json({ error: "Already Exists"});
        }
    } catch (error) {
        // Show the error with res status and json format
        console.log(error);
        return res.status(400).json(error);
    }
});

// Constant for update category data
const updateCategory = asyncHandler(async(req,res) => {
    try {
        const { name } = req.body;
        const { cateoryId } = req.params;

        const category = await Category.findOne({_id: categoryId});

        if (!category) {
            return res.status(404).json({ error: "Category not found! "});
        }

        category.name = name;

        const updatedCategory = await category.save();
        res.json(updatedCategory);

    } catch(error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error!"})
    }
});

// Constant for remove category from their list
const removeCategory= asyncHandler(async(req,res) => {
    try {
        const removed = await Category.findByIdAndRemove(req.params.categoryId);
        res.json(removed);
    } catch(error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error!"});
    }
});

// Constant for list category product
const listCategory = asyncHandler(async(req,res) => {
    try {
        const all = await Category.find({});
    } catch(error){
        console.log(error);
        return res.status(400).json(error.message);
    }
});

// Constant for read the category
const readCategory = asyncHandler(async(req,res) => {
    try {
        const category = await Category.findOne({ _id: req.params.id });
        res.json(category);
    } catch(error){
        console.log(error);
        return res.status(400).json(error.message);
    }
});

export {
    createCategory,
    updateCategory,
    removeCategory,
    listCategory,
    readCategory
};