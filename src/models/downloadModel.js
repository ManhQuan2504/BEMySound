import mongoose from 'mongoose';

const downloadSchema = new mongoose.Schema(
    {
        userID: {
            type: String,
            required: true,
        },
        songID: {
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
