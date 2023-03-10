import path from 'path'
import cors from 'cors'
import express from 'express'
import dotenv from 'dotenv'
import registerUser from './Controllers/studentController.js';

const __dirname = path.resolve()
const port = process.env.PORT || 5000;

// Deployment configuration
dotenv.config()

// configure env file in production
if (process.env.NODE_ENV === undefined) {
  dotenv.config({ path: '../.env' })
}

const app = express()
// Body parser
app.use(express.json())

// CORS
app.use(
  cors({
    origin: '*',
  })
)

app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});

app.get('/api', (req, res) => {
  res.send("<h1>Server Online.</h1> </br> <h3>Status code: 200</h3>");
});

let req = { firstname: "admin", middlename: "linux", lastname: "superuser", sex: "Male", ssn: "53057XXXX", dob: new Date("2000-09-12"), currentaddress: "54 Lafayette St.Schenectady, NY 12302", currentphoneno: "202-555-0146", email: "admin@placeholder.com" }
registerUser(req);
console.log(new Date("2000-09-12"))

export default app;