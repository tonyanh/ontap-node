import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        minLength: 3
    },
    email: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true
    }
}, {timestamps: true, versionKey: false})
export default mongoose.model("User", userSchema)
