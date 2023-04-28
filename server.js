const express = require("express");
require("dotenv").config();
const connect=require("./config/db")
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const employeeRoutes = require("./routes/employeeRoutes");
const port = process.env.PORT || 8000;


app.use(cors({ origin: "http://localhost:3000" }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/", employeeRoutes);
    

    app.listen(port, async() => {
        await connect();
        console.log("Server started at port " + port);

    });


