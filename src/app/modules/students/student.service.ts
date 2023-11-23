import { StudentModel } from '../students.model';
import { Student } from './students.interface';

const createStudentInDB = async (student: Student) => {
  const result = await StudentModel.create(student);
  return result;
};

const getAllStudentsFromDB = async () => {
  const result = await StudentModel.find();
  return result;
};
const getSingleStudentsFromDB = async (id: string) => {
  const result = await StudentModel.findOne({ id });
  return result;
};

export const StudentServices = {
  createStudentInDB,
  getAllStudentsFromDB,
  getSingleStudentsFromDB,
};
