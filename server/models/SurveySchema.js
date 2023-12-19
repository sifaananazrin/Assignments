const mongoose = require('mongoose');

const surveySchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'First name is required'],
  },
  lastName: {
    type: String,
    required: [true, 'Last name is required'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true, 
    match: [/.+\@.+\..+/, 'Please enter a valid email address'], 
  },
  phoneNumber: {
    type: String,
    required: [true, 'Phone number is required'],
   
  },
  gender: String,
  nationality: String,
  address: String,
  message: String,
});

const Survey = mongoose.model('Survey', surveySchema);

module.exports = Survey;
