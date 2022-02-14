
const express = require("express");
const cors    = require("cors");
const dotenv  = require('dotenv');
const bodyParser  = require("body-parser");
const mongoose    = require("mongoose");
const crudRoutes  = require("./routes/crud");
const port        = 3000;
dotenv.config();
app  = express();
app.use(cors());
app.use(bodyParser.json());

function myinit(){
    app.use("/api", crudRoutes);
    app.listen(port, () => {
        console.log(`Listening to http://localhost:${port}`);
    });
}

require("./config/dbConnect")
.then( myinit );
