import React, { useState } from "react";

function Home() {
  const [data, setData] = useState(null);

  function buttonHandler() {
    console.log("here");
    fetch("http://localhost:5000/")
      .then((res) => res.json())
      .then((data) => {
        setData(data.name);
      });
  }

  return (
    <div>
      <h1>Sass works if these letters are red!</h1>
      <p>
        Connected to server if button is pressed and "John Doe" appears!
        <button onClick={buttonHandler}>Get</button>
        <p>{data ? data : "No data"}</p>
      </p>
    </div>
  );
}

export default Home;
