(function() {
    'use strict';

    module.exports = {
        addStudent: addStudent,
        getStudents: getStudents,
        getStudentById: getStudentById,
        modifyStudent: modifyStudent,
        removeStudent: removeStudent,
        calculateAverage,
        modifyScore
    };

    var StudentService = require('./student.module')().StudentService;

    function addStudent(req, res, next) {

        StudentService.createStudent(req.body)
            .then(success)
            .catch(failure);

        function success(data) {
            req.response = data;
            next();
        }

        function failure(error) {
            next(error);
        }

    }

    function getStudents(req, res, next) {

        StudentService.fetchStudents()
            .then(success)
            .catch(failure);

        function success(data) {
            req.response = data;
            next();
        }

        function failure(err) {
            next(err);
        }

    }

    function getStudentById(req, res, next) {

        StudentService.fetchStudentById(req.params.studentId)
            .then(success)
            .catch(failure);

        function success(data) {
            req.response = data;
            next();
        }

        function failure(err) {
            next(err);
        }

    }

    function modifyScore(req, res, next) {
        StudentService.modifyScoreBySubject(req.params.subjectId, req.body.score)
            .then(success)
            .catch(error);

        function success(data) {
            req.response = data;
            next();
        }

        function error(err) {
            next(err);
        }
    }

    function modifyStudent(req, res, next) {
        StudentService.updateStudent(req.params.studentId, req.body)
            .then(success)
            .catch(error);

        function success(data) {
            req.response = data;
            next();
        }

        function error(err) {
            next(err);
        }
    }

    function removeStudent(req, res, next) {

        StudentService.deleteStudent(req.params.studentId)
            .then(success)
            .catch(error);

        function success(data) {
            req.response = data;
            next();
        }

        function error(err) {
            next(err);
        }

    }

    function calculateAverage(req, res, next) {
        StudentService.findBySubject(req.params.subjectId)
            .then(success)
            .catch(error);

        function success(data) {
            let average = 0;
            data.map(data => {
                average += data['score'];
            })
            average = average / data.length

            req.response = average;
            next();
        }

        function error(err) {
            next(err);
        }
    }

})();