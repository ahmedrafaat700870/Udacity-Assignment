import { Router } from "express";
import * as controllers from '../../controllers/User.controllers';
const user = Router();
user.get('/user' , controllers.getuser);
export default user ;