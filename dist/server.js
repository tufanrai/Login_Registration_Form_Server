"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const auth_router_1 = __importDefault(require("./router/auth.router"));
const dbConfig_1 = require("./config/dbConfig");
// import ting the root url's from .env file
const PORT = process.env.PORT ?? 8000;
const uri = process.env.DB_URI ?? '';
const source = process.env.SOURCE ?? '';
// initialising app  
const app = (0, express_1.default)();
// connecting the server with database
(0, dbConfig_1.dbConfig)(uri);
// using middlewares
app.use((0, cors_1.default)({
    origin: source,
}));
app.use(express_1.default.urlencoded());
app.use(express_1.default.json());
// using the routes
app.use('/api/auth', auth_router_1.default);
app.listen(PORT, () => console.log(`server started on port: ${PORT}🚀`));
//# sourceMappingURL=server.js.map