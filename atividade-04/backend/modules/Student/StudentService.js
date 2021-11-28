const StudentModel = require('./StudentModel');

let students = new Map();
class StudentService {

  static retrieve(_id) {
    if (!students.has(_id)) throw new Error('Student not found')

    return students.get(_id)
  }

  static create(data) {
    const student = StudentModel.generate(data);

    students.set(student._id, student);

    return student
  }

  static update(_id, data) {
    if (!students.has(_id)) throw new Error('Student not found')

    students.set(_id, data)

    return data
  }

  static delete(_id) {
    console.log(students)
    if (!students.has(_id)) throw new Error('Student not found')

    students.delete(_id)
    return true
  }

  static list() {
    return Array.from(students.values())
  }

}

module.exports = StudentService;