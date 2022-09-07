const express = require("express");
const bodyParser = require("body-parser");
// const db = require("./config/database");

const MaWeightRouter = require("./routes/MaWeightRouter");
const PmWeightRouter = require("./routes/PmWeightRouter");

const cors = require("cors");
const app = express();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

app.use("/api/v1", MaWeightRouter);
app.use("/api/v1", PmWeightRouter);

app.listen(3126, () => {
  console.log("Server running on port 3126");
});
