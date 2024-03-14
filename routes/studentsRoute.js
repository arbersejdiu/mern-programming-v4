const express = require("express");
const router = express.Router();
const {
  students,
  createStudent,
  updateStudent,
  deleteStudent,
} = require("../controllers/studentsController");
const studentsModel = require("../models/studentsModel");

// router.get("/", students);

router.get("/", async (req, res) => {
  try {
    const student = await studentsModel.find();
    res.render("students", { student });
  } catch (error) {
    console.log(error);
  }
});
router.get("/new", (req, res) => {
  res.render("newStudent");
});

router.post("/new", async (req, res) => {
  try {
    const { name, email } = req.body;
    const newStudent = await new studentsModel({ name, email });
    newStudent.save();
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
});

router.get("/update/:id", async (req, res) => {
  const { name, email } = req.body;
  try {
    const data = await studentsModel.findById(req.params.id);
    res.render("updateStudent", { student: data });
  } catch (error) {
    console.log(error);
  }
});
router.post("/update/:id", async (req, res) => {
  const { name, email } = req.body;
  const { id } = req.params;
  try {
    const data = await studentsModel.findByIdAndUpdate(
      { _id: id },
      { $set: { name, email } },
      {
        new: true,
      }
    );
    res.redirect("/");
    res.render("updateStudent", { student: data });
  } catch (error) {
    console.log(error);
  }
});

router.get("/delete/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const student = await studentsModel.findByIdAndDelete(id);
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
