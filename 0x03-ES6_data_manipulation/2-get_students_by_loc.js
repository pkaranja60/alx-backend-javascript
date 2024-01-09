export default function getStudentsByLocation(studentsArray) {
  if (!Array.isArray(studentsArray)) {
    return [];
  }
  return studentsArray.filter((student) => student.location === city);
}
