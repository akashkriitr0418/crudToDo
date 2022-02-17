
const express = require("express");
const cors    = require("cors");
const dotenv  = require('dotenv');
const bodyParser  = require("body-parser");
const mongoose    = require("mongoose");
const crudRoutes  = require("./routes/crud");
const userRoutes  = require("./routes/user")
const port        = 3001;
dotenv.config();
app  = express();
app.use(cors({ credentials: true }));
app.use(bodyParser.json());

function myinit(){
    app.use("/api", crudRoutes);
    app.use("/api/user", userRoutes);
    app.listen(port, () => {
        console.log(`Listening to http://localhost:${port}`);
    });
}

require("./config/dbConnect")
.then( myinit );
