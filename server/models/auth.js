import mongoose from "mongoose";


const userSchema = mongoose.Schema({
    name: {type: string, required: true},
    email: {type: string, required: true},
    password: {type: string, required: true},
    about: {type: string},
    tags: {type: [string]},
    joinedOn: {type: Date, default: Date.now}
})

export default mongoose.model("User", userSchema )