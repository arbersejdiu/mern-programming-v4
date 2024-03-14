// const Students = require("../models/studentsModel");

// // class studentController {
// //   static students(req, res) {
// //     const { name, email } = req.body;
// //     Students.find({}).then(() => {
// //       res.render("students", { studentsList: Students });
// //     });
// //   }
// //   static createStudent(req, res) {
// //     res.render("newStudent");
// //   }
// //   static updateStudent(req, res) {
// //     res.render("updateStudent");
// //   }
// //   static deleteStudent(req, res) {
// //     res.render("deleteStudent");
// //   }
// // }

// module.exports = students = async (req, res) => {
//   const students = await Students.find();
//   res.render("students.ejs", { students });
// };
// module.exports = createStudent = async (req, res) => {
//   res.render("newStudent");
// };
// module.exports = updateStudent = async (req, res) => {
//   res.render("updateStudent");
// };
// module.exports = deleteStudent = async (req, res) => {
//   res.render("deleteStudent");
// };

// module.exports = { students, createStudent, updateStudent, deleteStudent };
