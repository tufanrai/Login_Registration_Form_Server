"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = exports.newRegister = void 0;
const asyncHandler_1 = require("../utils/asyncHandler");
const errorHandler_1 = __importDefault(require("../utils/errorHandler"));
const user_model_1 = __importDefault(require("../model/user.model"));
const bcryptjs_utils_1 = require("../utils/bcryptjs.utils");
const jwt_utils_1 = require("../utils/jwt.utils");
// register new user 
exports.newRegister = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const { password, ...data } = req.body; // we receive the datas from body of request
    if (!data) { // returns error if all the required datas are not filled
        throw new errorHandler_1.default('please enter all the required details', 406);
    }
    ;
    const hashedPassword = await (0, bcryptjs_utils_1.hashPassword)(password); // the function returns hashed password
    if (!hashedPassword) { // If any problem occures while returning hashed password throws an error
        throw new errorHandler_1.default('something went wrong, please try again', 500);
    }
    ;
    const user = await user_model_1.default.create({ password: hashedPassword, ...data }); // creats new user data on the database storing all the user input data and hashed password insted of the actual password
    res.status(200).json({
        message: 'user successfuly registered',
        data: user,
        status: 'success',
        success: true,
    });
});
// login user 
exports.loginUser = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const { email, password } = req.body; // receiving email and password from the body of request
    if (!email) { // throws an error if email is not typed
        throw new errorHandler_1.default('please enter your email', 406);
    }
    ;
    if (!password) { // throws an error if password is not typed
        throw new errorHandler_1.default('please enter your password', 406);
    }
    ;
    const user = await user_model_1.default.findOne({ email }); // finds user from the database using typed email
    if (!user) {
        throw new errorHandler_1.default('user not found', 404);
    }
    const verifiedPassword = (0, bcryptjs_utils_1.verifyPassword)(password, user.password); // checks for the password and returns boolean value
    if (!verifiedPassword) { // if the password is false, returns an error
        throw new errorHandler_1.default('either password or email is incorrect', 406);
    }
    ;
    const accessToken = (0, jwt_utils_1.generateToken)({
        full_name: user.full_name,
        email: user.email,
        password: user.password
    });
    if (!accessToken) { // if any problem comes while token generation throws an error 
        throw new errorHandler_1.default('something went wrong please try again, 500', 404);
    }
    ;
    res.status(200).json({
        message: 'user successfuly loged in',
        data: user,
        status: 'success',
        success: true,
        accessToken,
    });
});
//# sourceMappingURL=auth.controller.js.map