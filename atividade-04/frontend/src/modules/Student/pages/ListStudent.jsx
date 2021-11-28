import React, { useEffect, useState } from "react";
import { deleteStudent, getStudents } from "../services/api";
import { useNavigate } from 'react-router-dom'

const ListStudent = () => {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();


  async function retrieveData() {
    const data = await getStudents()
    setStudents(data);
  }

  useEffect(() => {
    retrieveData()
  }, [])

  const onDelete = async (_id) => {
    await deleteStudent(_id)
    alert('Student successful deleted')
    retrieveData()
  }

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Course</th>
          <th scope="col">IRA</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        {students.map(student => (
          <tr>
            <th scope="row">{student._id}</th>
            <td>{student.name}</td>
            <td>{student.course}</td>
            <td>{student.ira}</td>
            <td>
              <button type="button" className="btn btn-light" onClick={() => navigate(`/student/${student._id}`)}>Edit</button>
              <button type="button" className="btn btn-danger" onClick={() => onDelete(student._id)}>Delete</button>
            </td>
          </tr>
        ))}
        
      </tbody>
    </table>
  );
};

export default ListStudent;
