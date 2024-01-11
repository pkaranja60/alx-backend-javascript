// main.ts
import { Subjects } from "./Teacher";
import { Cpp } from "./Cpp";
import { Java } from "./Java";
import { React } from "./React";

export const cpp: Subjects.Cpp = new Cpp();

export const java: Subjects.Java = new Java();

export const react: Subjects.React = new React();

export const cTeacher: Subjects.Teacher = {
  firstName: "John",
  lastName: "Doe",
  experienceTeachingC: 10,
};

// For Cpp subject
console.log("Cpp:");
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

// For Java subject
console.log("\nJava:");
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

// For React subject
console.log("\nReact:");
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
