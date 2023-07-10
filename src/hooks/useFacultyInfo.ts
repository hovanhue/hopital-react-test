import { useAppSelector } from './useAppSelector';
export const useFacultyInfo = () => {
  const { facultyType } = useAppSelector((state) => state.faculty.info);
  return facultyType;
};
