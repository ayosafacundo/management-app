import {ParsedQs} from "qs";
import { GetUsersQuery } from "../db/@types/querys.js";
import { User, Gender } from "../db/@types/models/users.js";
import { Err, Ok, Option, Result } from "rustic";

export function parseGetUsers(query: ParsedQs): Option<GetUsersQuery> {
  console.log(query);
  let limit = query.limit && Number.isInteger(+query.limit) ? (+query.limit!) : undefined;
  let offset = query.offset && Number.isInteger(+query.offset) ? (+query.offset!) : undefined;
  let email = query.email ? (""+query.email) : undefined;
  let gender = query.gender ? (""+query.gender): undefined;
  let role = query.role ? (""+query.role) : undefined;
  return {limit,offset,email,gender,role};
}

/**
 * Parse the body parameters of the /api/addusers post route.
 * @param query Query parameters.
 * @returns Result that's either the parsed query parameters or an error string.
 */
export function parseAddUsers(query: ParsedQs): Result<User, string> {
  let firstname;
  let lastname;
  let gender;
  let email;
  let role;
  let password;
  if (
    query.firstname &&
    query.lastname &&
    query.gender && Gender[query.gender.toString() as keyof typeof Gender] != undefined &&
    query.email &&
    query.password
  ) {
    firstname = query.firstname.toString();
    lastname = query.lastname.toString();
    gender = Gender[query.gender.toString() as keyof typeof Gender];
    email = query.email.toString();
    password = query.password.toString();
    role = query.role ? query.role.toString() : undefined;
  } else {
    return Err("Couldn't parse body.");
  }
  return Ok({
    firstname,
    lastname,
    gender,
    email,
    rolename: role,
    password
  });
}

export function parseUpdateUsers(query: ParsedQs): Option<String> {
  return query.toString();
}