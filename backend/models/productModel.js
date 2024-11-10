import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema;

const reviewSchema = mongoose.Schema(
    {
      name: { type: String, required: true },
      rating: { type: Number, required: true },
      comment: { type: String, required: true },
      user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
      },
    },
    { timestamps: true }
);

const productSchema = new Schema({
    name: { type: String, required: true, maxLengt: 255 },
    image: { type: String, required: true },
    brand: { type: String, required: true },
    quantity: { type: Number, required: true },
    category: { type: ObjectId, ref: "Category", required: true },
    description: { type: String, required: true },
    reviews: [reviewSchema],
    rating: { type: Number, required: true, default: 0 },
    numReviews: { type: Number, required: true, default: 0 },
    price: { type: Number, required: true, default: 0 },
    discount: { type: Number, required: true, default: 0 },
    countInStock: { type: Number, required: true, default: 0 },
    tags: [{ type: String, maxLength: 50 }],
}, 
    { timestamps: true}
);

productSchema.path('reviews').schema.set('timestamps', true);

module.exports = mongoose.model('Product', productSchema);
