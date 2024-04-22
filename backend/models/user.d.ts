export interface User {
  userID: number;
  userType: UserType;
  userName: string;
  password: string;
  Date_of_birth: Date;
  Gender: Gender;
  mailingAddress: string;
  phoneNumber: string;
  privileges: Privileges;
}

type Privilege = {
  admin: boolean,
  treasurer: boolean,
  teacher: boolean,
  librarian: boolean,
  advisor: boolean,
  student: boolean
}

enum UserType {
  admin = "Admin",
  treasurer = "Treasurer",
  teacher = "Teacher",
  librarian = "Librarian",
  advisor = "Advisor",
  student = "Student"
}

enum AcademicMajor {
  Engineering = "Engineering",
  Social = "Social"
}

enum Gender {
  Male = "Male",
  Female = "Female",
  Other = "Other"
}
