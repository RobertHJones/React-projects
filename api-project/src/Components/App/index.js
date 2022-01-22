import "./App.css";
import Input from "../Input";
import Header from "../Header";
import { useState } from "react";

function App() {
  const [character, setCharacter] = useState();

  async function fetchCharacter(character) {
    const response = await fetch(
      `https://swapi.dev/api/people?search=${character}`
    );
    const data = await response.json();
    console.log(data.results[0]);
    setCharacter(data.results[0]);
  }

  return (
    <form>
      <Header />
      <Input onSubmit={fetchCharacter} />
      <div>
        Name: {character.name} Height: {character.height}cm Hair Colour:
        {character.hair_color}
      </div>
    </form>
  );
}

export default App;
