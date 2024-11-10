import asyncHandler from "../middlewares/asyncHandler.js";
import Product from "../models/productModel.js";

// Constant add new product for admin
const addProduct = asyncHandler(async(req,res) => {
    try {
        // Fetch data from request fields 
        const { name, description, price, category, quantity, brand } = req.fields;

        // Validation data for every input is required
        switch (true) {
            case !name:
                return res.json({ error: "Name is required"});
            case !brand:
                return res.json({ error: "Brand is required"});
            case !description:
                return res.json({ error: "Description is required"});
            case !price:
                return res.json({ error: "Price is required"});
            case !category:
                return res.json({ error: "Category is required"});
            case !quantity:
                return res.json({ error: "Quantity is required"});
        }

        // Create new product and update in database with data in respon format JSON 
        const product = new Product({...req.fields});
        await product.save();
        res.json(product);
    } catch (error) {
        // Show the respon status and error message
        console.error(error);
        res.status(400).json(error.message);
    }
});

// Constant for updating detail product
const updateProductDetails = asyncHandler(async(req,res) => {
    try {
        // Fetch data from request fields
        const { name, description, price, category, quantity, brand} = req.fields;

        // Validation for every input is required
        switch (true) {
            case !name:
                return res.json({ error: "Name is required!"});
            case !brand:
                return res.json({ error: "Brand is required!"});
            case !description:
                return res.json({ error: "Description is required!"});
            case !price:
                return res.json({ error: "Price is required!"});
            case !category:
                return res.json({ error: "Category is required!"});
            case !quantity:
                return res.json({ error: "Quantity is required!"});
        }
        // Replace / update new product in database with new data respon in JSON format
        const product = await Product.findByIdAndUpdate(
            req.params.id, { ...req.fields }, { new: true} 
        );

        // Save data to database and send respon in JSON format
        await Product.save();
        res.json(product);

    } catch (error) {
        // Show the respon status and error message
        console.error(error);
        res.status(400).json(error.message);
    }
});

// Constant for remove the product by id
const removeProduct = asyncHandler(async(req,res) => {
    try {
        // Delete the product by id from paramater request
        const product = await Product.findByIdAndDelete(req.params.id);
        // Return the respons JSON format with deleted product 
        res.json(product);
    } catch (error) {
        // Show the error and respon with status and message
        console.error(error);
        res.status(500).json({ error: "Server Error! "});
    }
});

// Constant for fetching and show product  
const fetchProducts = asyncHandler(async(req,res) => {
    try {
        // Determine the item product per page
        const pageSize = 6;

        // Check keyword in query
        const keyword = req.query.keyword ? {
            name: {
                $regex: req.query.keyword,
                $options: "i"
            },
        } 
        : {};
        // Count sum total document that match the filter
        const count = await Product.countDocuments({ ...keyword });
        // Fetch list product match with keyword
        const products = await Product.find({ ...keyword }).limit(pageSize);
        // Mengirimkan respon JSON with list product and pagination information
        res.json({
            products,
            page: 1,
            pages: Match.ceil(count / pageSize),
            hasMore: false,
        });
    } catch (error) {
        // Show the error message and respon status with JSON format
        console.error(error);
        res.status(500).json({ error: "Server Error."});
    }
});

// Constant for fetching product by id
const fetchProductById = asyncHandler(async(req,res) => {
    try {
        // Fetch the product id from parameter request
        const product = await Product.findById(req.params.id);
        // If product exists return respon status and product
        if (product) {
            return res.json(product);
        } else {
            // If not exist show respon status and throw the error message
            res.status(404);
            throw new Error("Product not found!");
        }
    } catch (error) {
        // Show the error message and respon with status 
        console.error(error);
        res.status(404).json({ error: "Product not found!"});
    }
});

// Constant for fetching all product 
const fetchAllProducts = asyncHandler(async(req,res) => {
    try {
        // Fetch product from database
        const product = await Product.find({})
        .populate("category")
        .limit(12)
        .sort({ createAt: -1 });
        // Send the respon in JSON format
        res.json(products);
    } catch (error) {
        // Show the error message and send respon status 
        console.error(error);
        res.status(500),json({ error: "Server Error" });
    }
});

// Constant for adding product review
const addProductReview = asyncHandler(async (req,res) => {
    try {
        // Fetch several data from request body and parameter  
        const { rating, comment } = req.body;
        const product = await Product.findById(req.params.id);

        // If product exists, check the product availability
        if (product) {
            // Check the avaibality product from database with various text type
            const alreadyReviewed = product.reviews.find(
                (r) => r.user.toString() === req.user._id.toString()
            );
        // If product exsits, then send the response status and message
        if (alreadyReviewed) {
            res.status(400);
            throw new Error("Product already reviewed");
        }

        // If there isn't one yet, then create the new object for review the product
        const review = {
            name: req.user.username,
            rating: Number(rating),
            comment,
            user: req.user._id
        };

        // Add review to array product
        product.review.push(review);

        // Update the review sum
        product.numreview = product.reviews.length;

        // Recalculate the item product rating based on all exist review
        product.rating = 
            product.reviews.reduce((acc, item) => item.rating + acc, 0) /
            product.reviews.length;

            // Save product data to database
            await product.save();
            
            // Send the response status and message to JSON format
            res.status(201).json({ message: "Review added!" });
        } else {
            // If product not exists, then send the response status and message
            res.status(404);
            throw new Error("Product not found");
        }
    } catch (error) {
        // Show the error and send response status with JSON format
        console.error(error);
        res.status(400).json(error.message);
    }
});

// Constant for  show product review with top rating
const fetchTopProducts = asyncHandler(async(req,res) => {
    try {
        // Fetch 4 product based on top rating 
        const products = await Product.find({}).sort({ rating: -1}).limit(4);
        // Send the product with JSON file
        res.json(products); 
    } catch (error) {
        // Show the error and send the response with JSON format
        console.error(error);
        res.status(400).json(error.message);
    }
});

// Constant for show new products
const fecthNewProducts = asyncHandler(async(req,res) => {
    try {
        // Fetch product from database with ascending sorting
        const product = await Product.find().sort({ _id: -1 });
        // Send response product with JSON format
        res.json(products);
    } catch (error) {
        // Show the error and response status
        console.error(error);
        res.status(400).json(error.message);
    }
});

// Constant for filtering product
const filterProducts = asyncHandler(async(req,res) => {
    try {
        // Fetch several data from body request
        const { checked, radio } = req.body;

        // Create new null object filter
        let args = {};
        // If category exist add to filter
        if (checked.length > 0) args.category = checked;
        // Add length price to filter
        if (radio.length) args.price = { $gte: radio[0], $lte: radio[1]};

        // Fetch product based on filter
        const products = await Product.find(args);
        // Send product with JSON format
        res.json(products);
    } catch (error) {
        // If error, show the error message and send status code
        console.error(error);
        res.status(500).json({ error: "Server Error" });
    }
});

export {
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
}

