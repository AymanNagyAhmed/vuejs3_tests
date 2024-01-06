// the axios instance and types
import http from "../api";

async function getStudents() {
  return await http.get("students");
}

async function deleteStudent(id) {
  return await http.delete(`students/${id}`);
}

async function createStudent(input) {
  return await http.post("students", input);
}

async function updateStudent(input) {
  return await http.put("students", input);
}

export default {
  getStudents,
  createStudent,
  updateStudent,
  deleteStudent,
};
