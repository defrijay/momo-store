import express from "express";
import formidable from "express-formidable";
import {
    addProduct,
    updateProductDetails,
    removeProduct,
    fetchProducts,
    fetchProductById,
    fetchAllProducts,
    addProductReview,
    fetchTopProducts,
    fecthNewProducts,
    filterProducts
} from "../controllers/productController.js"

import { authenticate, authorizeAdmin } from "../middlewares/authMiddleware.js";
import checkId from "../middlewares/checkId";

// Inisialize express router 
const router = express.Router();

// Define router endpoint '/' for
router
    .route("/")
    .get(fetchProducts) // Get product
    .post(authorizeAdmin, addProduct);  // Create the product

// Define routes with endpoint '/all-products' for fetching all list products
router.route("/all-products").get(fetchAllProducts);

// Define routes with endpoint '/:id/reviews' for add review product
router.route("/:id/reviews").post(authenticate, checkId, addProductReview);

// Define routes with endpoint '/top' for fetching all list top product
router.get("/top", fetchTopProducts);

// Define routes with endpoint '/new' for fetching all list newest product
router.get("/new", fecthNewProducts);

// Define routes with endpoint '/:id' for 
router
    .route("/:id")
    .get(fetchProductById)  // Get product by id
    .put(authenticate, authorizeAdmin, formidable(), updateProductDetails) // Updating existing product
    .delete(authenticate, authorizeAdmin, removeProduct);   // Delete existing product

// Define routes with endpoint '/filtered-products' for filtering existing products 
router.route("/filtered-products").post(filterProducts);

// Export the inisialize express router
export default router;
