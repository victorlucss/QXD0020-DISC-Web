const StudentModel = require('./StudentModel');

let students = new Map();
class StudentService {

  static async retrieve(_id) {
    const found = await StudentModel.findById(_id)
    if (!found) throw new Error('Student not found')

    return found
  }

 static async create(data) {
    try {
      const student = await StudentModel.create(data)

    return student
    } catch(error) {
      console.log(error)
    }
  }

  static async update(_id, data) {
    try {
      let found = await StudentModel.findById(_id)
      
      Object.keys(data).map(key => {
        found[key] = data[key]
      })

    await found.save();

    return data
    } catch(error) {
      console.log(error)
    }
  }

  static async delete(_id) {
    await this.retrieve(_id)

    await StudentModel.deleteOne({
      _id
    })
    return true
  }

  static async list() {
    try {
      const stds = await StudentModel.find()

      return stds;
    } catch (error) {
      console.log(error)
    }
  }

}

module.exports = StudentService;