// the types.ts file 
export type Course = {
    id: number;
    title: string;
    description: string;
    schoolID: number;
  };
  
  export type InputCreateCourse = {
    title: string;
    description: string;
    schoolID: number;
  };
  
  export type InputUpdateCourse = {
    id: number;
    title: string;
    description: string;
    schoolID: number;
  };