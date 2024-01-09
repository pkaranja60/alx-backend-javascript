export default function getStudentIdsSum(studentsArray) {
  if (!Array.isArray(studentsArray)) {
    return 0;
  }
  return studentsArray.reduce((sum, student) => sum + student.id, 0);
}
