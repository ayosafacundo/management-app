import { Request, Response } from "express";
// Database @types
import { User } from "../db/@types/models/users.js";
import {db} from "../server.js";
import { Router } from "express";
import { parseAddUsers, } from "../Services/ParseQuerys.js";
import { BAD_REQUEST, INTERNAL_SERVER_ERROR, SUCCESS } from "../Models/HTTPResponses.js";
import { isOk, Result } from "rustic";


const postRouter = Router();

postRouter.post('/api/addusers', async (req:Request, res:Response) => {
  let body: Result<User, string> = parseAddUsers(req.body);
  let ans;
  if (!isOk(body)) {  //  Failed to parse body.
    res.status(400).json(BAD_REQUEST(body.data))
    return;
  }
  let query: User = body.data;
  ans = await db.addUser(query)
  if (!isOk(ans)){
    res.status(500).json(INTERNAL_SERVER_ERROR(ans.data)); // Unspecified error in the database.
  }else {
    res.status(200).json(SUCCESS("User created Successfully")); // Success!
  }
  return;
})

export default postRouter;