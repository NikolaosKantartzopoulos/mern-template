import React, { useState } from "react";

function Home() {
  const [data, setData] = useState(null);
  const [databaseFiles, setDatabaseFiles] = useState(null);

  function buttonHandler() {
    console.log("here");
    fetch("http://localhost:5000/")
      .then((res) => res.json())
      .then((data) => {
        setData(data.name);
      });
  }

  function checkDatabaseFn() {
    console.log("Checking database...");
    fetch("http://localhost:5000/api/database/check-database-data")
      .then((res) => res.json())
      .then((data) => setDatabaseFiles(data.a));
  }

  return (
    <div>
      <h1>Sass works if these letters are red!</h1>
      <div className="checkConnectionBox">
        Check Server Connection
        <button onClick={buttonHandler}>Check server!</button>
        <p>{data ? data : "..."}</p>
      </div>
      <div className="checkConnectionBox">
        <p>Check Database Connection</p>
        <button onClick={checkDatabaseFn}>Check database!</button>
        <p>{!databaseFiles ? "..." : databaseFiles}</p>
      </div>
    </div>
  );
}

export default Home;
