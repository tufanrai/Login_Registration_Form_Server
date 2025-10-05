"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const UserSchema = new mongoose_1.Schema({
    full_name: {
        type: String,
        required: [true, 'please enter your full name']
    },
    email: {
        type: String,
        required: [true, 'please enter your email']
    },
    password: {
        type: String,
        required: [true, 'please enter your password']
    },
}, { timestamps: true });
const User = (0, mongoose_1.model)('users', UserSchema);
exports.default = User;
//# sourceMappingURL=user.model.js.map