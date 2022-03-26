"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getuser = void 0;
const getuser = (_, res, next) => {
    res.status(200).json('User comin');
};
exports.getuser = getuser;
