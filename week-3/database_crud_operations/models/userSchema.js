import { Schema, model } from "mongoose";

//Create User schema { Uername, password, age }

const userSchema = new Schema({
    username: {
        type: String,
        required: [true, "Username is required"],
        maxLength: [34, "Maximum length is exceeded"]
    },
    password: {
        type: String,
        required: [true, "Password is mandatory"],
        minLength: [6, "Minimum lenght must be 6"]
    },
    age: {
        type: Number,
        required: [true, "Age must be provided"],
        min: [18, "Age should not be less than 18"],
        max: [32, "Age must not exceeds 32"]
    }
},{
    strict: "throw",
    timestamps: true
})


// Create user model with the schema

export const UserModel = model('user', userSchema);