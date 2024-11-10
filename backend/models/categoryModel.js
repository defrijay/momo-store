import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    name : {
        type: String,
        trim: true,
        required: true,
        maxLength: 32,
        unique: true, 
    },
    description : {
        type: String,
        required: true,
        maxLength : 255
    }
}, 
    { timestamps: true }
);
  
  module.exports = mongoose.model('Category', categorySchema);
  