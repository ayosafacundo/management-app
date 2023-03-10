import path from 'path'
import cors from 'cors'
import express from 'express'
import dotenv from 'dotenv'

const __dirname = path.resolve()
const port = process.env.PORT || 3001;

// Deployment configuration
//configure env file in dev mode
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

import accounts from './accounts.json' assert { type: "json"};

app.get('/api/users/:id', (req, res) => {
  let params = req.params.id ? req.params.id : false;
  const index = accounts.findIndex(e => e._id == params) != -1 ? accounts.findIndex(e => e._id == params) : false;
  console.log(index)
  if (!index) {
    res.send('Error: No Parameters')
  } else {
    res.send(accounts[index]);
  }
})