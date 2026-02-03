import { Mongoose, Schema, model } from "mongoose";

//create cart schema
const cartSchema = new Schema({
    product: {
        type: Schema.Types.ObjectId,
        ref: 'product', //name of the product model
    },
    quantity: {
        type: Number,
        default: 0
    }
},{
    strict: "throw",
    timestamps: false,
    versionKey: false
})

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    email: {
        type: String,
        required: [true, "Email is must be required"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Password must have to provide"]
    },
    cart: {
        type: [cartSchema]
    }
})

export const UserModel = model('user', userSchema);