import React, { useState } from 'react';

type Props = {};

function About({}: Props) {
  const [a, setA] = useState(true);

  return (
    <div>
      About
      <button
        style={{ backgroundColor: a ? 'red' : 'green' }}
        onClick={() => setA(false)}
      >
        Red
      </button>
      <h1>Sass works if these letters are red!</h1>
    </div>
  );
}

export default About;
