import mongoose from 'mongoose';

const likeSchema = new mongoose.Schema(
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
            type: Number,
            required: true,
        },
    },
    {
        timestamps: true
    }
);

const Like = mongoose.model('Likes', likeSchema);
export default Like;
