import { Schema, model } from "mongoose";

const ProductSchema = new Schema({
    name: {
        type: String,
        required: [true, "Product name is required"]
    },
    price: {
        type: Number,
        required: [true, "Product price is required"]
    },
    brand: {
        type: String,
        required: [true, "Product brand is required"]
    },
    
},{
    strict: "throw",
    timestamps: true,
    versionKey: false
});

export const ProductModel = model('product', ProductSchema);