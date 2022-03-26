import { Router } from "express";
import user from './api/user.routes'
const api = Router();
api.use('/v1' , user);
 
export default api;