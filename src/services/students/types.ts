//the types.ts file
export type Student = {
    id: number;
    firstName: string;
    lastName: string;
    age: number;
    schoolID: number;
  };
  
  export type InputCreateStudent = {
    firstName: string;
    lastName: string;
    age: number;
    schoolID: number;
  };
  
  export type InputUpdateStudent = {
    id: number;
    firstName: string;
    lastName: string;
    age: number;
    schoolID: number;
  };