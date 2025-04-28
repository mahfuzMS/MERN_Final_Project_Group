const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
    {
        title: String,
        content: String,
        image: String,
        author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        likes: [String],
        comments: [
            {
                user: String,
                comment: String,
                createdAt: { type: Date, default: Date.now },
            },
        ],
    },
    { timestamps: true }
);

module.exports = mongoose.model("Post", postSchema);
