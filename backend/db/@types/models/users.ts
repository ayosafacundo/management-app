export enum Gender {
  'Male',
  'Female',
  'Other'
}

export interface User {
  firstname: string,
  lastname: string,
  email: string,
  gender: Gender,
  rolename: string | undefined,
  password: string,
}