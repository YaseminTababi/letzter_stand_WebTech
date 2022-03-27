const express = require('express');
const router = express.Router();

const {
    getAllStudents,
    getStudent,
    deleteStudent,
    updateStudent,
    createStudent
} = require('../controllers/students');

router
    .route('/')
    .get(getAllStudents)
    .post(createStudent);

router
    .route('/:id')
    .get(getStudent)
    .put(updateStudent)
    .delete(deleteStudent);

module.exports = router;

