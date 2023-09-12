import mongoose from 'mongoose';

const songSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        userID: {
            type: String,
            required: true,
        },
        albumID: {
            type: String,
            required: true,
        },
        genre: {
            type: String,
            required: true,
        },
        coverImage: {
            type: String,
            required: true,
        },
        duration: {//thời lượng
            type: Number,
            required: true,
        },
        audioFile: {
            type: String,
            required: true,
        }
    },
    {
        timestamps: true
    }
);

const Song = mongoose.model('Songs', songSchemaSchema);
export default Song;
