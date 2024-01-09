export default function getListStudentIds() {
  if (!Array.isArray(studentsArray)) {
    return [];
  }
  return studentsArray.map((student) => student.id);
}
