"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = exports.generateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const jwtSecretKey = process.env.JWT_SECRET_KEY ?? 'Shhh'; // This is the secret key which is used for token generation and decoding of token
const jwtExpiryDate = process.env.JWT_EXPIRY_DATE ?? '30d'; // This is the expiry date of the token, when the token exceds this time the generated token won't work so that for new token user have to login again.
// token generator function
const generateToken = (data) => {
    const token = jsonwebtoken_1.default.sign(data, jwtSecretKey, { expiresIn: jwtExpiryDate });
    return token;
};
exports.generateToken = generateToken;
// verify token 
const verifyToken = (token) => {
    return jsonwebtoken_1.default.verify(token, jwtSecretKey);
};
exports.verifyToken = verifyToken;
//# sourceMappingURL=jwt.utils.js.map