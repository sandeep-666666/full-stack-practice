import express from "express";
import "dotenv/config";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Server is ready");
});

//get a list of 5 jokes
app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "Programmer Life",
      content:
        "Why do programmers prefer dark mode? Because light attracts bugs!",
    },
    {
      id: 2,
      title: "JavaScript Joke",
      content:
        "Why did JavaScript go to therapy? Because it couldn't handle its own closures!",
    },
    {
      id: 3,
      title: "Developer Problem",
      content: "A programmer's favorite place? The Ctrl + S spot!",
    },
    {
      id: 4,
      title: "Coding Life",
      content:
        "Why was the developer always calm? Because he knew how to handle exceptions!",
    },
    {
      id: 5,
      title: "Debugging",
      content:
        "Debugging is like being the detective in a crime movie where you are also the criminal!",
    },
  ];
  res.send(jokes);
});

app.listen(PORT, () => {
  console.log(`app is listening on port no: http://localhost:${PORT}`);
});
