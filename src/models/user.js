import mongoose, { Schema } from "mongoose";



const UserSchema = new Schema({
    name: String,
    email: String,
    phone: Number,

});

export default mongoose.model("User", UserSchema)