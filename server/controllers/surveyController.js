
const { validationResult } = require('express-validator');
const Survey = require('../models/SurveySchema');

exports.submitSurvey = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { firstName, lastName, email, phoneNumber, gender, nationality, address, message } = req.body;

    const existingSurvey = await Survey.findOne({ email });
    if (existingSurvey) {
      return res.status(400).json({error: 'Email already submitted.' });
    }

    if (!isValidPhoneNumber(phoneNumber)) {
      return res.status(400).json({ error: 'Invalid phone number format.' });
    }

    const newSurvey = new Survey({
      firstName,
      lastName,
      email,
      phoneNumber,
      gender,
      nationality,
      address,
      message,
    });

    await newSurvey.save();
    res.status(201).json({ message: 'Survey added successfully', survey: newSurvey });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while saving the survey.' });
  }
};




function isValidPhoneNumber(phoneNumber) {
 
  const phoneRegex = /^\d{10}$/;

  return phoneRegex.test(phoneNumber);
}


