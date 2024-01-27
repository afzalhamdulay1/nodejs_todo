const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    completed: {
        type: Boolean,
        default: false
    },
    dueDate: {
        type: Date
    }
});

module.exports = mongoose.model("Todo", todoSchema);
