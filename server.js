const fetch = require("node-fetch");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/chat", async (req, res) => {
  try {
    const response = await fetch("http://localhost:11434/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "llama3",
        prompt: req.body.message,
        stream: false,
      }),
    });

    const text = await response.text();

    console.log("FULL DATA:", data);

    res.json({ reply: text });
  } catch (error) {
    res.status(500).json({ error: "LLM request failed" });
  }
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
