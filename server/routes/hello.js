const express = require("express");
const app = express();

app.get("/api", (req, res) => {
  const name = req.query.name || "fella";
  let greetings = `hello ${name}`;
  console.log("user:", req.query);
  return res.json({ message: greetings });
});

module.exports = app;
