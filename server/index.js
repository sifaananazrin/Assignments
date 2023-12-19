
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./config/db');
const formRouter = require('./routes/SurveyRoutes'); 
const adminRouter = require('./routes/adminRoutes'); 

const app = express();
const port = process.env.PORT || 3000;

require('dotenv').config()
app.use(cors());
connectDB();

app.use(bodyParser.json());

// Use the formRouter as middleware
app.use('/api', formRouter);
app.use('/admin', adminRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
