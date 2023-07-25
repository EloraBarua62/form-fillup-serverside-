// import files
const app = require("./app");
const DbConnect = require("./utils/dbConnect");

// Database call
DbConnect;

// server running port
const port = process.env.PORT || 5000;


app.listen(port , () => {
    console.log(`App is running on port ${port}`);
})