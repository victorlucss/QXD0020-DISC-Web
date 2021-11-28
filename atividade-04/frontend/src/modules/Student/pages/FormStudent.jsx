import React, { useEffect, useState } from 'react';
import { createStudent, getStudent, updateStudent } from '../services/api';
import { useParams } from 'react-router-dom'

const FormStudent = () => {
  const { id } = useParams()

  const [values, setValues] = useState({
    name: '',
    course: '',
    ira: 0
  })

  useEffect(() => {
    async function retrieveStudentData() {
      if (!id) return;

      const student = await getStudent(id)
      setValues({
        name: student.name,
        course: student.course,
        ira: student.ira
      })
    }

    retrieveStudentData()
  }, [id])

  const onChange = (field, value) => {
    setValues(oldValues => ({
      ...oldValues,
      [field]: value
    }))
  }

  const onSubmit = async (event) => {
    event.preventDefault();
    
    try {
      if (id) {
        await updateStudent(id, values);
        alert('Successful updated!')
        return;
      }

      await createStudent(values);
      alert('Successful created!')
    } catch (error) {
      console.log('CreateStudent::createStudent', error);
    }

  }
  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label for="name">Name</label>
        <input type="text" className="form-control" id="name" placeholder="Name" value={values.name} onChange={(ref) => onChange('name', ref.currentTarget.value)} required />
      </div>
      
      <div className="form-group">
        <label for="course">Course</label>
        <input type="string" className="form-control" id="course" placeholder="Course" value={values.course} onChange={(ref) => onChange('course', ref.currentTarget.value)} required />
      </div>
      
      <div className="form-group">
        <label for="course">IRA</label>
        <input type="number" className="form-control" id="course" placeholder="IRA" max="10" step="0.5" min="0" value={values.ira} onChange={(ref) => onChange('ira', ref.currentTarget.value)} required />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  )
}


export default FormStudent