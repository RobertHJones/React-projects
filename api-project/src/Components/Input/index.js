import React from "react";
import { useState } from "react";
import "./index.css";

function Input({ onSubmit }) {
  const [character, setCharacter] = useState("");
  function getValue(e) {
    setCharacter(e.target.value);
  }

  function searchAPI(e) {
    e.preventDefault();

    onSubmit(character);
  }
  return (
    <form>
      <input onChange={getValue} placeholder="Enter character name" />
      <button onClick={searchAPI}>Search</button>
    </form>
  );
}
export default Input;
