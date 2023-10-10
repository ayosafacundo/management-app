export interface User {
  Username: string; // This is the unique identifier for your account. It is typically your email address, but it may also be a randomly generated string of characters.
  Password: string;   // This is used to authenticate your identity when you log in to your account.
  First_name: string; // This is your given name.
  Last_name: string;  // This is your surname.
  Date_of_birth: Date; // This is used to verify your identity and to determine your eligibility for financial aid.
  Gender: Gender; // This is used for demographic purposes.
  Mailing_address: string;  // This is used to send you important documents, such as acceptance letters and transcripts.
  Phone_number: string; // This is used to contact you if there are any problems with your account.
  Emergency_contact: Contact[]; // This is used to contact someone in case of an emergency.
  Student_ID: Number; // This is a unique identifier for students at the university. It is typically issued by the university's registrar's office.
  Academic_major: Number; // This is the field of study you are interested in.
}

enum Gender {
  Male = "Male",
  Female = "Female",
  Other = "Other"
}

interface Contact {
  First_name: string
  Last_name: string
  Phone_number: string
}
