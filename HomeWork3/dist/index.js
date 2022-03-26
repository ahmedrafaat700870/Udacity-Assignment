"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const helmet_1 = __importDefault(require("helmet"));
const express_rate_limit_1 = require("express-rate-limit");
const index_1 = __importDefault(require("./routes/index"));
const error_middelwares_1 = require("./middlewares/error.middelwares");
const app = (0, express_1.default)();
const PORT = 3000;
const RATELIMIT = (0, express_rate_limit_1.rateLimit)({
    windowMs: 15 * 60 * 1000,
    max: 100,
    standardHeaders: true,
    legacyHeaders: false,
    message: "you can't vist this site now !",
});
//midelwares
app.use(express_1.default.json());
app.use((0, morgan_1.default)("common"));
app.use((0, helmet_1.default)());
app.use(RATELIMIT);
app.use(index_1.default);
app.get('/', (_, res) => {
    // throw new Error('Error');
    res.status(200).json('done');
});
// henel Errors
app.use(error_middelwares_1.handelErrors);
app.use((_, res) => {
    res.status(404).json(`ohhh you can't vist this site`);
});
app.listen(PORT, () => {
    console.log("SEVER IS RUNING");
});
exports.default = app;
