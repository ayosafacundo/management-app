import { Err, Ok, Option, Result } from "rustic";
import { db } from "../server.js";
import { HTTPResponse, INTERNAL_SERVER_ERROR } from "../Models/HTTPResponses.js";
import { GetUsersQuery } from "../db/@types/querys.js";


export async function GetUserController(cleanQuery: GetUsersQuery): Promise<Result<Option<any[]>, HTTPResponse>> {
  let ans;
  try {
    ans = await db.getUsers(cleanQuery).then((val) => val);
    return Ok(ans);
  } catch (err) {
    console.log(err);
    return Err(INTERNAL_SERVER_ERROR("Unable to list users."));
  }
}