const Comment = require("../models/comment");

const addComment = async (req, res) => {
    const { comment } = req.body;

    if (!comment) {
        return res.status(400).json({ message: "Comment field cannot be empty" });
    }

    try {
        const newComment = new Comment({ comment });
        await newComment.save();
        res.status(201).json({ message: "Commented successfully", data: newComment });
    } catch (error) {
        res.status(500).json({ message: "Error adding comment", error: error.message });
    }
};

const getComment = async (req, res) => {
    try {
        const comments = await Comment.find();
        res.status(200).json({ message: "Comments retrieved successfully", data: comments });
    } catch (error) {
        res.status(500).json({ message: "Error retrieving comments", error: error.message });
    }
};

module.exports = { addComment, getComment };
