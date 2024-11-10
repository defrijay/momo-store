const wishlistSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    products: [{
      productId: { type: Schema.Types.ObjectId, ref: 'Product' },
      addedAt: { type: Date, default: Date.now }
    }],
}, 
    { timestamps: true }
);
  
module.exports = mongoose.model('Wishlist', wishlistSchema);
  