const express = require("express");

const getUSStates = require("./getUSStates");

const app = express();

app.use(express.static("./public"));

app.get("/api/states", async (req, res) => {
  const states = await getUSStates();
  res.json(states);
});

app.listen("225", () => {
  console.log("Listening at http://localhost:225");
});
