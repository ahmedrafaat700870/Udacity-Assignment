import express, { Application, Request, Response, NextFunction } from "express";
import morgan from "morgan";
import helmet from "helmet";
import { rateLimit } from "express-rate-limit";
import api from './routes/index';
import { handelErrors } from "./middlewares/error.middelwares";

const app = express();
const PORT = 3000;
const RATELIMIT = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  message: "you can't vist this site now !",
});
//midelwares
app.use(express.json());
app.use(morgan("common"));
app.use(helmet());
app.use(RATELIMIT);
app.use(api);
app.get('/' , (_: Request , res: Response) => {
  // throw new Error('Error');
  res.status(200).json('done');
})

// henel Errors
app.use(handelErrors);
app.use((_: Request , res: Response) => {
  res.status(404).json(`ohhh you can't vist this site`);
})
app.listen(PORT, () => {
  console.log("SEVER IS RUNING");
});
export default app;