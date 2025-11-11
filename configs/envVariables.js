//import (.env) file
const dotEnv = require('dotenv').config();

const envVariables = {
    PORT: process.env.PORT_NUMBER,
    mongodbURI: process.env.MONGODB_URI,
    accessToken: process.env.ACCESS_TOKEN,
};

Object.freeze(envVariables);


module.exports = envVariables;