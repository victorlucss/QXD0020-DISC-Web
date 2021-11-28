import axios from '../../../utils/axios';

export const getStudents = async () => {
  const result = await axios.get('/students')
  return result.data;
}

export const getStudent = async (id) => {
  const result = await axios.get(`/students/${id}`)
  return result.data;
}

export const createStudent = async (data) => {
  const result = await axios.post('/students', data)
  return result.data;
}

export const updateStudent = async (id, data) => {
  const result = await axios.patch(`/students/${id}`, data)
  return result.data;
}

export const deleteStudent = async (id) => {
  const result = await axios.delete(`/students/${id}`)
  return result.data;
}
