const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

//Middlewares
app.use(cors());
app.use(express.json());

//Routes
app.use("/api/user", require("./routes/userRouter"));
app.use("/api/post", require("./routes/postRouter"));

//Connect to DB
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
        app.listen(process.env.PORT, () =>
            console.log(`Server running on port ${process.env.PORT}`)
        );
    })
    .catch((err) => console.log(err));
