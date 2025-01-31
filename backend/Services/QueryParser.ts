import {ParsedQs} from "qs";
import { GetUsersQuery } from "../db/@types/querys.js";
import { User, Gender } from "../db/@types/models/users.js";
import { Err, Ok, Option, Result } from "rustic";


export class QueryParser {
  static GetUsers(query: ParsedQs): Option<GetUsersQuery> {
    let limit = query.limit && Number.isInteger(+query.limit) ? (+query.limit!) : undefined;
    let offset = query.offset && Number.isInteger(+query.offset) ? (+query.offset!) : undefined;
    let email = query.email ? (""+query.email) : undefined;
    let gender = query.gender ? (""+query.gender): undefined;
    let role = query.role ? (""+query.role) : undefined;
    return {limit,offset,email,gender,role};
  }

  static UpdateUsers(query: ParsedQs): Option<String> {
    return query.toString();
  }
}