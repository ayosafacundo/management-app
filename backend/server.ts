import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import path from 'path';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const __dirname = path.resolve();
const port = process.env.PORT || 5000;

// Deployment configuration
dotenv.config();

// configure env file in production
if (process.env.NODE_ENV === undefined) {
  dotenv.config({ path: '../.env' });
}

const app: Express = express();

app.use(express.json());
app.use(cors({ origin: '*', }));
app.use(cookieParser());

app.listen(port, function (): void {
  console.log(`Listening on port ${port}`);
});

app.get('/', (req: Request, res: Response) => {
  res.status(200).send("<h1>Server Online.</h1> </br> <h3>Status code: 200</h3>");
});

app.get('/openapi/events', (req: Request, res: Response) => {

})

app.get('/login', (req: Request, res: Response) => {
  const { email, password } = req.body;

});

app.post('/register', (req: Request, res: Response) => {

});

export default app;