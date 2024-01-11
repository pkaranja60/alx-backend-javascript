class Teacher {
  private readonly firstName: string;
  private readonly lastName: string;
  private readonly fullTimeEmployee: boolean;
  private yearsOfExperience?: number;
  private readonly location: string;
  [key: string]: any;

  constructor(
    firstName: string,
    lastName: string,
    fullTimeEmployee: boolean,
    location: string,
    yearsOfExperience?: number
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullTimeEmployee = fullTimeEmployee;
    this.yearsOfExperience = yearsOfExperience;
    this.location = location;
  }
}

interface Directors extends Teacher {
  numberOfReports: number;
}

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

function printTeacher(firstName: string, lastName: string): string {
  const firstLetter = firstName.charAt(0);
  return `${firstLetter}. ${lastName}`;
}

interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClass;
}

interface StudentClass {
  workOnHomework(): string;
  displayName(): string;
  [key: string]: any;
}

const StudentClassImplementation: StudentClassConstructor = class StudentClass {
  private readonly firstName: string;
  private readonly lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
};
