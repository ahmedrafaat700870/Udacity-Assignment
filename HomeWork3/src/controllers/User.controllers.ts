import {Request ,Response , NextFunction} from 'express'
export const getuser = (_ : Request , res: Response , next: NextFunction) => {
    res.status(200).json('User comin')
}