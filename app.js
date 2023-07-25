// import packages
const express = require('express');
const cors = require('cors');


// create app
const app = express();


// middleware
app.use(express.json());
app.use(cors());


// Routes
// base route
app.get('/' , (req,res) => {
    res.send('app is running');
});



module.exports = app;