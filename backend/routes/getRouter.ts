import { Request, Response } from "express";
// Database @types
import { GetUsersQuery } from "../db/@types/querys.js";
import { Router } from "express";
import { QueryParser } from "../Services/QueryParser.js";
import { isOk, Option } from "rustic";
import { GetUserController } from "../Controllers/GetController.js";

const getRouter = Router();

getRouter.get('/v1/users', async (req: Request, res: Response) => {
  const queryable: Option<GetUsersQuery> = QueryParser.GetUsers(req.query);
  if (!queryable) {
    res.sendStatus(400)
  }
  const response = await GetUserController(queryable as GetUsersQuery);
  if (!isOk(response)){
    res.sendStatus(response.data.status);
  }
  res.json(response.data);
  return;
})

export default getRouter;