"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handelErrors = void 0;
const handelErrors = (error, _, res, next) => {
    const status = error.status || 404;
    const message = error.message || "Error";
    res.status(status).json({ message: message });
};
exports.handelErrors = handelErrors;
