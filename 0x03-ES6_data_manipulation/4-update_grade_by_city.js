export default function updateStudentGradeByCity(
  studentsArray,
  city,
  newGrades
) {
  if (!Array.isArray(studentsArray) || !Array.isArray(newGrades)) {
    return [];
  }
  return studentsArray
    .filter((student) => student.location === city)
    .map((student) => {
      const matchedGrade = newGrades.find(
        (grade) => grade.studentId === student.id
      );

      return {
        id: student.id,
        firstName: student.firstName,
        location: student.location,
        grade: matchedGrade ? matchedGrade.grade : "N/A",
      };
    });
}
