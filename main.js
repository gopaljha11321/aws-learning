const express = require("express");
const app = express();
const port = 3000;

// Enable JSON parsing
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/api", (req, res) => {
  const { name, age } = req.query;
  const data = { message: `Hello, ${name}! You are ${age} years old.` };
  res.json(data);
});

// Start the server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
