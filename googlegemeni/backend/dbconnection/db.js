const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/GeminiApi")
    .then(() => {
        console.log("db connected...");
    })
    .catch((err) => {
        console.log(err);
    });