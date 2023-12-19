const { body, validationResult } = require("express-validator");

exports.validateSurvey = [
  body("firstName", "First name is required").notEmpty(),
  body("lastName", "Last name is required").notEmpty(),
  body("email").isEmail().withMessage("Please enter a valid email address"),
  body("phoneNumber").notEmpty().withMessage("Phone number is required"),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];
