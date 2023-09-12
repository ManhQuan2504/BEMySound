import mongoose from 'mongoose';

const playList_SongSchema = new mongoose.Schema(
    {
        playListID: {
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

const PlayList = mongoose.model('PlayLists', playListSchema);
export default PlayList;
