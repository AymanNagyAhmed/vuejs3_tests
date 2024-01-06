// the types.ts file 
export type Teacher = {
    id: number;
    firstName: string;
    lastName: string;
    age: number;
    schoolID: number;
    courseID: number;
  };
  
  export type InputCreateTeacher = {
    firstName: string;
    lastName: string;
    age: number;
    schoolID: number;
    courseID: number;
  };
  
  export type InputUpdateTeacher = {
    id: number;
    firstName: string;
    lastName: string;
    age: number;
    schoolID: number;
    courseID: number;
  };