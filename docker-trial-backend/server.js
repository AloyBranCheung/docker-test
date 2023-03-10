require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const port = 3001;

app.use(cors());

app.get("/", (req, res) => {
  res.send(JSON.stringify(`${process.env.TEST}`));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
