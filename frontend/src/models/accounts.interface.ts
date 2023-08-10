export interface account {
    id: number,
    username: string,
    type: accountType,
    email: string,
    password: string,
    privileges: privilege
}

export enum accountType {
    admin = "Admin",
    treasurer = "Treasurer",
    teacher = "Teacher",
    librarian = "Librarian",
    advisor = "Advisor",
    student = "Student"
}

export type privilege = {
    admin: boolean,
    treasurer: boolean,
    teacher: boolean,
    librarian: boolean,
    advisor: boolean,
    student: boolean
}