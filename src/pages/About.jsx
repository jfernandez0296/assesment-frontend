import React from 'react';

const About = () => {
  return (
    <div>
      <h2>About</h2>
      <p>Personal information:</p>
      <ul>
        <li>Name: John Doe</li>
        <li>Description: Full-stack web developer</li>
        <li>Email: johndoe@example.com</li>
      </ul>
      <p>Three things I've learned in this program:</p>
      <ul>
        <li>React</li>
        <li>Node.js</li>
        <li>API integration</li>
      </ul>
      <a href="https://github.com/johndoe">GitHub</a>
    </div>
  );
};

export default About;
