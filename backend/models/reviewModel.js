const reviewSchema = new Schema({
    productId: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    rating: { type: Number, required: true },
    comment: String,
  },
  { timestamps: true }
);
  
  module.exports = mongoose.model('Review', reviewSchema);
  