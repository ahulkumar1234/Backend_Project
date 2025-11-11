const express = require('express');
const app = express();
const env = require('./configs/envVariables.js');
const connectDB = require('./configs/connectDB.js');
const UserRouter = require('./routes/users.route.js');
const cookieParser = require('cookie-parser');

connectDB() // calling connectDB function

app.use(cookieParser());

// these middleware used for parse the form data from body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
/////////////////////////////////////////////////

// check route to see if the server is running
app.get("/", (req, res) => {
    res.send("<h1>Hello World</h1")
})


app.use("/api/v1/users", UserRouter);

app.listen(env.PORT, () => {
    console.log(`Server is running on port ${env.PORT}`)
})













//config : setup server,connect to database etc.
//controllers : handle request logic
//middlewares : custom functions to handle requests and responses
//models : define data schemas and interact with the database
//routes : define endpoints and their logic
//utils : utility functions and helpers
//.env : environment variables
//app.js : entry point of the application
//package.json : configuration file and dependencies for project