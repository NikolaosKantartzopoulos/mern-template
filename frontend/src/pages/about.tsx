import React, { useState } from "react";

function About() {
  const [a, setA] = useState(true);
  const [asdf, setAsdf] = useState(null);

  async function getAsdf() {
    fetch("http://localhost:4000/api/asdf")
      .then((res) => res.json())
      .then((data) => setAsdf(data.name));
  }

  return (
    <div>
      About
      <button
        style={{ backgroundColor: a ? "lightcoral" : "lightgreen" }}
        onClick={() => setA(false)}
      >
        Red
      </button>
      <button onClick={getAsdf}>Get</button>
      <h1>Sass works if these letters are red!</h1>
      {asdf ? <div>{asdf}</div> : <h1>No data</h1>}
    </div>
  );
}

export default About;
