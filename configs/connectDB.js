const mongoose = require('mongoose')
const envVariables = require('./envVariables');

async function connectDB(params) {
    try {
        await mongoose.connect(envVariables.mongodbURI,{
            dbName:"backend_project",
        });
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log(error)
        process.exit(1);
    }
}

// process.exit(1)=> means code exit with error
// process.exit(0)=> means code exit succesfully without error

module.exports = connectDB;