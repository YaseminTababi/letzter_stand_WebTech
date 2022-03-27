const path = require('path');
const asyncHandler = require('../middleware/async');
const Student = require('../models/Student');
const ErrorResponse = require('../utils/errorResponse');

// @desc        Get all Students
// @route       GET /api/v1/students
// @access      Public

exports.getAllStudents = asyncHandler(async (req, res, next) => {
    var students = await Student.find();
    res.status(200).json({data: students});
});


// @desc        Get single Student
// @route       GET /api/v1/students/:id
// @access      Public

exports.getStudent = asyncHandler(async (req, res, next) => {
    const student = await Student.findById(req.params.id);
    if (!student) {
        return next(err);
    }
    res.status(200).json({ sucess: true, msg: 'Data found', data: student });


});

// @desc        create a Student
// @route       POST /api/v1/students
// @access      Private

exports.createStudent = asyncHandler(async (req, res, next) => {
    // Add user Id
    const student = await Student.create(req.body);
    res.status(201).json({ sucess: true, msg: "Create a student", data: student });

});

// @desc        Update single Student
// @route       PUT /api/v1/students/:id
// @access      Private

exports.updateStudent = asyncHandler(async (req, res, next) => {
    console.log("body", req.body);
    let student = await Student.findById(req.params.id);
    console.log("student",student)
    if (!student) {
        return next(new ErrorResponse(`Student not found with id of ${req.params.id}`, 400))
    }

    student = await Student.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    });

    res.status(200).json({
        success: true,
        data: student
    });


});

// @desc        Delete a Student
// @route       DELETE /api/v1/students/:id
// @access      Private

exports.deleteStudent = asyncHandler(async (req, res, next) => {
    const student = await Student.findById(req.params.id);
    if (!student) {
        return next(err);
    }
    student.remove();
    res.status(200).json({ success: true, msg: "Student deleted" })


});
