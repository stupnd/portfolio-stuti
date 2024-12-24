const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/gpt", async (req, res) => {
  const { prompt } = req.body;

  // Replace with your GPT model's logic
  const mockResponse = `This is a mock response for the prompt: "${prompt}"`;
  res.json({ response: mockResponse });
});

app.listen(5001, () => console.log("Server running on port 5001"));
