(function() {
    'use strict';

    module.exports = {
        createStudent: createStudent,
        fetchStudents: fetchStudents,
        fetchStudentById: fetchStudentById,
        updateStudent: updateStudent,
        deleteStudent: deleteStudent,
        findBySubject: findBySubject
    };

    var StudentModel = require('./student.module')().StudentModel;

    function createStudent(student) {
        return StudentModel.create(student);
    }

    function fetchStudents() {
        return StudentModel.find({})
            .exec();
    }

    function fetchStudentById(studentId) {
        return StudentModel.findById(studentId)
            .exec();
    }

    function updateStudent(studentId, student) {
        return StudentModel
            .findByIdAndUpdate(studentId, student, { new: true })
            .exec();
    }

    function deleteStudent(studentId) {
        return StudentModel
            .findByIdAndRemove(studentId)
            .exec();
    }

    function findBySubject(subjectId) {
        return StudentModel.find({ subjectId: subjectId }).exec();

    }

})();