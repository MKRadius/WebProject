import mongoose, { Schema } from "mongoose";

const taskSchema = new Schema({
    title: { type: String, required: true },
    date: { type: String, required: true },
    content: {type: String, required: true},
    user_id: { type: Schema.Types.ObjectId, required: true }
}, {
    collection: "task"
});

const Task = mongoose.model("Task", taskSchema);

export { Task };