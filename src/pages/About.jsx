import React from 'react';

const About = () => {
  return (
    <div>
      <h2>About</h2>
      <p>Personal information:</p>
      <ul>
        <li>Nombre: Jaime Fernández Chávez</li>
        <li>Description: Full-stack web developer</li>
        <li>Correo: jfernandezc@uni.pe</li>
      </ul>
      <p>Lista de 3 cosas que hayas aprendido en este programa:</p>
      <ul>
        <li>React</li>
        <li>Node.js</li>
        <li>API integration</li>
      </ul>
      <p>Link a Github:</p>
      <a href="https://github.com/jfernandez0296">GitHub</a>
    </div>
  );
};

export default About;
