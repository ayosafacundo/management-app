export interface GetUsersQuery {
  limit: number | undefined,
  offset: number | undefined,
  role: string | undefined,
  email: string | undefined,
  gender: string | undefined
}