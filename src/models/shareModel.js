import mongoose from 'mongoose';

const shareSchema = new mongoose.Schema(
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

const Share = mongoose.model('Shares', shareSchema);
export default Share;
