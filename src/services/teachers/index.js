// the axios instance and types
import http from "../api";

async function getTeachers() {
  return await http.get("teachers");
}

async function deleteTeacher(id) {
  return await http.delete(`teachers/${id}`);
}

async function createTeacher(input) {
  return await http.post("teachers", input);
}

async function updateTeacher(input) {
  return await http.put("teachers", input);
}

export default {
  getTeachers,
  createTeacher,
  updateTeacher,
  deleteTeacher,
};
