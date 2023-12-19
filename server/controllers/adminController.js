const Survey = require("../models/SurveySchema");

exports.adminLogin = async (req, res) => {
  const { username, password } = req.body;

  if (
    username === process.env.ADMIN_EMAIL &&
    password === process.env.ADMIN_PASSWORD
  ) {
    return res.status(200).json({ message: "Admin logged in successfully" });
  }

  res.status(401).json({ error: "Invalid admin credentials" });
};

exports.getAllSurveys = async (req, res) => {
  try {
    const surveys = await Survey.find({});
    res.status(200).json(surveys);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching surveys." });
  }
};
