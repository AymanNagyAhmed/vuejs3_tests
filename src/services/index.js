//services/index.ts
import schoolController from "./schools";
import courseController from "./courses";
import studentController from "./students";
import teacherController from "./teachers";

export const API = {
  schools: schoolController,
  courses: courseController,
  students: studentController,
  teachers: teacherController,
};
