require('dotenv').config()
const Flipside = require("@flipsidecrypto/sdk")

exports.flipside = new Flipside(
    process.env.FLIPSIDE_API_KEY,
    "https://node-api.flipsidecrypto.com"
);


