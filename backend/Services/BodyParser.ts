import { ParsedQs } from "qs";
import { GetUsersQuery } from "../db/@types/querys.js";
import { User, Gender } from "../db/@types/models/users.js";
import { Err, Ok, Option, Result } from "rustic";

export class BodyParser {
  /**
 * Parse the body parameters of the /v1/addusers post route.
 * @param query Query parameters.
 * @returns Result that's either the parsed query parameters or an error string.
 */
  static AddUsers(query: ParsedQs): Result<User, string> {
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
}