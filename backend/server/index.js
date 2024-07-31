const express = require('express');
const app = express();
const cors = require('cors');
const contactRoutes = require('./routes/contact');
const  authenticateAPIKey  = require('./routes/authenticate');
require('dotenv').config();
app.use(express.urlencoded({ extended: true })) // for form data
app.use(express.json()) // for json

app.use(cors());
app.use('/',authenticateAPIKey,contactRoutes);
app.listen(8000);