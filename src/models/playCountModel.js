import mongoose from 'mongoose';

const playCountSchema = new mongoose.Schema(
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

const PlayCount = mongoose.model('PlayCounts', playCountSchema);
export default PlayCount;
