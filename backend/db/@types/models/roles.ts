export interface role {
  rolename: string,
}

export interface permissions {
  permissionname: string,
  permissiondescription: string,
}

export interface Roles {
  rolename: string,
  permissions: permissions[]
}