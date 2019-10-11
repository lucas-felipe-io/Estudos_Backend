const express = require("express");
const consign = require('consign');
const mongoose = require("mongoose");

//create app no express
const app = express();

//connection mongodb
mongoose.connect("mongodb+srv://lucas:ObxfDUhfVmq8FdSy@cluster0-i2qy9.mongodb.net/mongodb?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// express mode json
app.use(express.json());

consign()
    .include("./src/controllers/sessionController.js")
    .then('./src/routes.js')
    .into(app)

app.listen(8080, ()=> {console.log("running: 8080")});