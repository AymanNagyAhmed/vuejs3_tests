// the axios instance and types
import http from "../api";

async function getCourses() {
  return await http.get("courses");
}

async function deleteCourse(id) {
  return await http.delete(`courses/${id}`);
}

async function createCourse(input) {
  return await http.post("courses", input);
}

async function updateCourse(input) {
  return await http.put("courses", input);
}

export default {
  getCourses,
  createCourse,
  updateCourse,
  deleteCourse,
};
