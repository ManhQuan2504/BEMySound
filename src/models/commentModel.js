import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema(
    {
        userID: {
            type: String,
            required: true,
        },
        songID: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true
    }
);

const Comment = mongoose.model('Comments', commentSchema);
export default Comment;
