import { Request, Response } from "express";
// Database @types
import { User } from "../db/@types/models/users.js";
import {db} from "../server.js";
import { Router } from "express";
import { QueryParser, } from "../Services/QueryParser.js";
import { isOk, Result } from "rustic";
import { BodyParser } from "../Services/BodyParser.js";


const postRouter = Router();

postRouter.post('/v1/addusers', async (req:Request, res:Response) => {
  let body: Result<User, string> = BodyParser.AddUsers(req.body);
  let ans;
  if (!isOk(body)) {
    res.sendStatus(400);  //  Failed to parse body.
    return;
  }
  let query: User = body.data;
  ans = await db.addUser(query)
  if (!isOk(ans)){
    res.json(ans.data); // Unspecified error in the database.
  }else {
    res.sendStatus(200); // Success!
  }
  return;
})

export default postRouter;