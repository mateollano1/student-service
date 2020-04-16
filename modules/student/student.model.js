(function() {
    var mongoose = require('mongoose');

    var Schema = mongoose.Schema;

    var StudentSchema = new Schema({
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        phoneNumber: {
            type: Number,
            required: true
        },
        subjectId: {
            type: String,
            required: true
        },
        score: {
            type: Number,
            required: true
        },
        address: String,
        city: String,
    });

    module.exports = mongoose.model('students', StudentSchema);
})();