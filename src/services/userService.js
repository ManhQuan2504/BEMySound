import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";

const getUser = async (perPage, page) => {
    const totalsUser = await userModel.countDocuments().exec();
    const getUsers = await userModel.find().limit(perPage).skip((page - 1) * perPage).exec();
    if (!totalsUser || !getUsers) {
        throw new Error("Error fetching users: " + error.message);
    }
    return { totalsUser, getUsers }; // Sửa tên biến thành getUsers để tránh trùng tên với hàm getUser
}

const getDetails = async (userID) => {
    const getDetails = await userModel.findById(userID).exec();
    if (getDetails) {
        return getDetails;
    } else {
        throw new Error("Can't get details User");
    }
}

const searchUser = async (perPage, page, keyword) => {
    const getKeyword = {
        $or: [ //tìm bản ghi phù hợp ở cả 3 trường dữ liệu
            { username: { $regex: keyword, $options: 'i' } }, //regex: biểu thức tìm chuỗi khớp, option "i": k phân biệt hoa thường
            { gmail: { $regex: keyword, $options: 'i' } },
            { phoneNumber: { $regex: keyword, $options: 'i' } },
        ]
    };
    const totalsUser = await userModel.countDocuments(getKeyword).exec();
    const getUsers = await userModel.find(getKeyword).limit(perPage).skip((page - 1) * perPage).exec();
    if (!totalsUser || !getUsers) {
        throw new Error("Error fetching users: " + error.message);
    }
    return { totalsUser, getUsers }; // Sửa tên biến thành getUsers để tránh trùng tên với hàm getUser
}

const createUser = async ({ username, gmail, password, fullname, dateOfBirth, gender, country }) => {
    const checkUsername = await userModel.findOne({ username }).exec();
    if (!!checkUsername) {
        throw new Error("Username already exists"); // sau khi trả về ctrl Ném lỗi vào catch 
    }

    const checkGmail = await userModel.findOne({ gmail }).exec();
    if (!!checkGmail) {
        throw new Error("Email has been uses");
    }

    const passwordHashed = bcrypt.hashSync(password, parseInt(process.env.SALT_ROUND));
    const createUser = await userModel.create({
        username: username,
        gmail: gmail,
        password: passwordHashed,
        fullname: fullname,
        phoneNumber: "",
        dateOfBirth: dateOfBirth,
        gender: gender,
        country: country,
        profilePicture: "C:\\Users\\ManhQuan\\Desktop\\Web\\BEMySound\\files\\img\\avt.jpg",
        userType: 1
    })

    createUser.password = "*****";

    if (createUser) {
        return createUser;
    } else {
        throw new Error("Can't create User");
    }
}

const updateUser = () => {
    try {

    } catch (error) {

    }
}

const deleteUser = () => {
    try {

    } catch (error) {

    }
}

const signinUser = () => {
    try {

    } catch (error) {

    }
}

const signupUser = () => {
    try {

    } catch (error) {

    }
}

export default {
    getUser,
    getDetails,
    searchUser,
    createUser,
    updateUser,
    deleteUser,
    signinUser,
    signupUser,
}