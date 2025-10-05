"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConfig = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
// function that connects server with the database. 
const dbConfig = (uri) => {
    mongoose_1.default.connect(uri)
        .then(() => console.log('server connected to database successfuly'))
        .catch(err => console.log(err));
};
exports.dbConfig = dbConfig;
//# sourceMappingURL=dbConfig.js.map