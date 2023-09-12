import userService from "../services/userService.js";
import Joi from "joi";
import message from "../messages/message.js";

const Schema = Joi.object({
    username: Joi.string().min(3).required().label('username'),
    gmail: Joi.string().email().required().label('gmail'),
    password: Joi.string().min(3).required().label('password'),
    confirmPassword: Joi.string().valid(Joi.ref('password')).required().label('confirmPassword'),
    fullname: Joi.string().required().label('fullname'),
    phoneNumber: Joi.string().pattern(/^[0-9+*. -]+$/).label('phoneNumber'),
    dateOfBirth: Joi.date().iso().required().label('dateOfBirth'),
    gender: Joi.string().valid('male', 'female').required().label('gender'),
    country: Joi.string().required().label('country'),
});

const getUser = async (req, res) => {
    try {
        const perPage = 3;
        let page = req.query.page || 1;
        page = Math.max(page, 1);
        const response = await userService.getUser(perPage, page);
        return message.SUCCESS(res, response);
    } catch (error) {
        return message.ERROR(res, error.message || "Can't get User");
    }
}

const detailsUser = async (req, res) => {
    try {
        const userID = req.params.id;
        const getDetails = await userService.getDetails(userID);
        return message.SUCCESS(res, getDetails);
    } catch (error) {
        return message.ERROR(res, error.message);
    }
}

const searchUser = async (req, res) => {
    try {
        const perPage = 3;
        let page = req.query.page || 1;
        page = Math.max(page, 1);
        let keyword = req.query.keyword || "";

        const response = await userService.searchUser(perPage, page, keyword);
        return message.SUCCESS(res, response);
    } catch (error) {
        return message.ERROR(res, error.message || "Can't get User");
    }
}

const createUser = async (req, res) => {
    try {
        const { username, gmail, password, confirmPassword, fullname, dateOfBirth, gender, country } = req.body;
        if (!username || !gmail || !password || !confirmPassword || !fullname || !dateOfBirth || !gender || !country) {
            return message.ERROR(res, "The input is required!");
        }

        const validationInput = Schema.validate({ username, gmail, password, confirmPassword, fullname, dateOfBirth, gender, country });
        if (validationInput.error) {
            const errorMessages = validationInput.error.details.map((error) => error.message);
            return message.ERROR(res, `Dữ liệu không hợp lệ: ${errorMessages.join(', ')}`); //Truyền res vào hàm ERROR để bạn có thể sử dụng res.status() trong hàm ERROR.
        }

        const response = await userService.createUser({ username, gmail, password, fullname, dateOfBirth, gender, country })
        return message.SUCCESS(res, response);
    } catch (error) {
        return message.ERROR(res, error.message || "An error occurred");
    }
}

const updateUser = (req, res) => {
    try {
        console.log(req.params);
        console.log(req.body);
    } catch (error) {

    }
}

const deleteUser = (req, res) => {
    try {

    } catch (error) {

    }
}

const signinUser = (req, res) => {
    try {

    } catch (error) {

    }
}

const signupUser = (req, res) => {
    try {

    } catch (error) {

    }
}

const updateAvatar = (req, res) => {
    try {

    } catch (error) {

    }
}

export default {
    getUser,
    detailsUser,
    searchUser,
    createUser,
    updateUser,
    deleteUser,
    signinUser,
    signupUser,
    updateAvatar
}