import { Request, Response } from "express";
// Database @types
import { Router } from "express";
import { QueryParser } from "../Services/QueryParser.js";
import { Option } from "rustic";

const putRouter = Router();

putRouter.put('/v1/updateUser', async (req: Request, res: Response) => {
  let queryable: Option<String> = QueryParser.UpdateUsers(req.body);
  if (!queryable) {
    res.status(400);
  }
})

export default putRouter;