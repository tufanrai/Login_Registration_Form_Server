"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyPassword = exports.hashPassword = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
// hash password 
const hashPassword = async (password) => {
    const Salt = await bcrypt_1.default.genSalt(12); // you can generate salt of any number but usually number between 10 - 15 are prefered.
    const hashedPassword = bcrypt_1.default.hash(password, Salt);
    return hashedPassword; // returns a hashed password
};
exports.hashPassword = hashPassword;
// verify password
const verifyPassword = (password, hash) => {
    return bcrypt_1.default.compare(password, hash); // returns a boolean value
};
exports.verifyPassword = verifyPassword;
//# sourceMappingURL=bcryptjs.utils.js.map