import { Err, Ok, Option, Result } from "rustic";
import { db } from "../server.js";
import { GetUsersQuery } from "../db/@types/querys.js";

export async function GetUserController(cleanQuery: GetUsersQuery): Promise<Result<Option<any[]>, string>> {
  let ans;
  try {
    ans = await db.getUsers(cleanQuery);
    return Ok(ans);
  } catch (err) {
    console.log(err);
    return Err("Unable to list users.");
  }
}