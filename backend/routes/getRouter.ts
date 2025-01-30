import { Request, Response } from "express";
// Database @types
import { GetUsersQuery } from "../db/@types/querys.js";
import { Router } from "express";
import { parseGetUsers } from "../Services/ParseQuerys.js";
import { BAD_REQUEST, CONFLICT, INTERNAL_SERVER_ERROR, SUCCESS } from "../Models/HTTPResponses.js";
import { isOk, Option } from "rustic";
import { GetUserController } from "../Controllers/GetController.js";

const getRouter = Router();

getRouter.get('/api/users', async (req: Request, res: Response) => {
  const queryable: Option<GetUsersQuery> = parseGetUsers(req.query);
  if (!queryable) {
    res.sendStatus(400).json(BAD_REQUEST("Bad request, unable to correctly parse query."))
  }
  const response = await GetUserController(queryable as GetUsersQuery);
  if (isOk(response)){
    res.sendStatus(200).json(response.data);
  } else {
    res.sendStatus(response.data.status).json(response.data);
  }
  return;
})

export default getRouter;