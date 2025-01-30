import { Request, Response } from "express";
// Database @types
import { Router } from "express";
import { parseUpdateUsers } from "../Services/ParseQuerys.js";
import { BAD_REQUEST } from "../Models/HTTPResponses.js";
import { Option } from "rustic";

const putRouter = Router();

putRouter.put('/api/updateUser', async (req: Request, res: Response) => {
  let queryable: Option<String> = parseUpdateUsers(req.body);
  if (!queryable) {
    res.status(400).json(BAD_REQUEST);
  }
})

export default putRouter;