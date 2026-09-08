import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import axios from "axios";
import { useEffect } from "react";

function App() {
  const [jokes, setjokes] = useState([]);

  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((response) => {
        setjokes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <>
      <h1>This is a full stack demo</h1>
      <p>Jokes: {jokes.length}</p>

      {jokes.map((joke, index) => (
        <div key={joke.id}>
          <h3>{joke.title}</h3>
          <p>{joke.content}</p>
        </div>
      ))}
    </>
  );
}

export default App;
