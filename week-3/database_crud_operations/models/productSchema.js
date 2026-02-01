import { Schema, model } from "mongoose";

//create product schema { name, price, brand, quantity }
const productSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name os the product must be mentioned"],
        maxLength: [35, "maximum length of the name must not exceed 35"]
    },
    price: {
        type: Number,
        required: [true, "The product price must have to be mentioned"],
        min: [0, "Price of the product cannot be negative"]
    },
    brand: {
        type: String,
        required: [true, "The product type must has to be mentioned"],
    },
    quantity: {
        type: Number,
        required: [true, "The quantitiy of the product must has to mention"],
        min: [0, "The product quantity must not decrease zero"]
    }
},{
    strict: "throw",
    timestamps: true
})

// Create Product model
export const ProductModel = model('product', productSchema);