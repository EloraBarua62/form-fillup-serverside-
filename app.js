// import packages
const express = require('express');
const cors = require('cors');

// create app
const app = express();

// route
const formDataRoute = require('./routers/formData.route');


// middleware
app.use(express.json());
app.use(cors());


// Routes
// base route
app.get('/' , (req,res) => {
    res.send('app is running');
});

// FormData route
app.use("/api/v1/formdata", formDataRoute);

module.exports = app;