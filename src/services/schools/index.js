// the axios instance and types
import http from "../api";

async function getSchools() {
  return await http.get("schools");
}

async function deleteSchool(id) {
  return await http.delete(`schools/${id}`);
}

async function createSchool(input) {
  return await http.post("schools", input);
}

async function updateSchool(input) {
  return await http.put("schools", input);
}

export default {
  getSchools,
  createSchool,
  updateSchool,
  deleteSchool,
};
