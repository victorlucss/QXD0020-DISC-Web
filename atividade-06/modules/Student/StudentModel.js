
const { Schema, model } = require("mongoose");

const schema = new Schema({
  name: {
    type: String,
    required: true,
  },

  course: {
    type: String,
    required: true,
  },

  ira: {
    type: Number,
    required: true,
  } 
}, {
  versionKey: false,
});

module.exports = model("Student", schema, "students");