import  {  Request, Response, NextFunction } from "express";

 interface Error {
    status?: number;
    name?: string;
    message?: string;
    stack?: string;
}
export const handelErrors = (error: Error, _: Request, res: Response, next: NextFunction) => {
    const status = error.status || 404;
    const message = error.message || "Error";
    res.status(status).json({ message: message });
};

