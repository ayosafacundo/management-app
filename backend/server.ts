import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import path from 'path';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import qs from 'qs';
import bodyParser from 'body-parser';
import multer from 'multer';
import Database from './db/dbService.js';
import {getRouter, postRouter, putRouter} from './routes/index.js';

const __dirname = path.resolve();
const port = process.env.PORT || 5000;

// Deployment configuration
dotenv.config();
// configure env file in production
if (process.env.NODE_ENV === undefined) {
  dotenv.config({ path: '../.env' });
}
// Express app
const app: Express = express();
// Multer multiform Parser
const upload = multer();
// Parse multipart/form-data
app.use(upload.any())
// Parse application/json
app.use(bodyParser.json());
// Parse query
app.set('query parser', function (str:string) {
  return qs.parse(str, {allowEmptyArrays: false});
})
// Parse application/xwww-
app.use(bodyParser.urlencoded({extended: true}));
// Parse Cookies
app.use(cookieParser());
// Cors
app.use(cors({ origin: '*', }));

export const db = new Database({
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD ? process.env.PGPASSWORD : " ",
  host: process.env.HOST,
  port: process.env.PGPORT ? (+process.env.PGPORT!) : 5432,
  database: process.env.PGDATABASE,
  connectionTimeoutMillis: 1000,
  idleTimeoutMillis: 30000
});


if (process.env.ENVIRONMENT === "development") {
  app.get('/resetall', (req:Request, res:Response) => {
    db.createDB();
    res.status(200).send("<h1>Database Successfully setted to default values</h1>")
  })
}

app.get('/', (req: Request, res: Response) => {
  res.status(200).send("<h1>Server Online.</h1> </br> <h3>Status code: 200</h3>");
});

// Routers
app.use(getRouter);
app.use(postRouter);
app.use(putRouter);

app.listen(port, function (): void {
  console.log(`Listening on port ${port}`);
});

export default app;