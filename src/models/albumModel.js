import mongoose from 'mongoose';

const albumSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        userID: {
            type: String,
            required: true,
        },
        releaseDate: {
            type: Date,
            required: true,
        },
        coverImage: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true
    }
);

const Album = mongoose.model('Albums', albumSchema);
export default Album;
