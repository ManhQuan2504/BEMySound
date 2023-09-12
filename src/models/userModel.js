import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true //duy nhất
        },
        gmail: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        fullname: {
            type: String,
            required: true
        },
        phoneNumber: {
            type: String,
            required: false
        },
        dateOfBirth: {
            type: Date,
            required: true
        },
        gender: {
            type: String,
            required: true
        },
        country: {
            type: String,
            required: true
        },
        profilePicture: {
            type: String,
            required: true
        },
        userType: {
            type: Number,
            required: true
        }
    },
    {
        timestamps: true //thêm thời gian tạo và sửa
    }
);

const User = mongoose.model('Users', userSchema);
export default User;
