const express = require("express");
const router = express.Router();
const { validateSurvey } = require("../Middleware/validationMiddleware");
const surveyController = require("../controllers/surveyController");

router.post("/submit-survey", validateSurvey, surveyController.submitSurvey);

module.exports = router;
