import mongoose from 'mongoose';

const playListSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        userID: {
            type: String,
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

const PlayList = mongoose.model('PlayLists', playListSchema);
export default PlayList;
