
class StudentModel {
  constructor (_id, name, course, ira) {
    this._id = _id;
    this.name = name;
    this.course = course;
    this.ira = ira;
  }

  static generate(data) {
    if (!data.name) throw new Error('name is required')
    if (!data.course) throw new Error('course is required')
    if (!data.ira) throw new Error('ira is required')

    return new StudentModel(new Date().getTime(), data.name, data.course, data.ira)
  }
}

module.exports = StudentModel;