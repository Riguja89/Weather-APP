import React from 'react';
import './About.css';


export default function About() {
  return (
    <div className='abaut'>
     <h1>About Weather App</h1>     
     <div className='container'>
      <p>
      Esta aplicación fue creada como una de las homeworks para el bootcamp  <a target="newtab" href="https://www.soyhenry.com/" className='link'> #Soyhenry </a>
      de desarrollo Web Full Stack, con el fin de afianzar y practicar los 
      conocimientos adquiridos en CSS, HTML, Javascipt, React JS, Axios, Reac-Router, redux,  entre otros.
      </p>
      <br />
      <br />
      <br />
      <p>
        Desarrollada con ❤️ por <a target="newtab" href="https://github.com/Riguja89" className='link'>Jaime Gutierrez, </a>
        Fullstack Developer.
      </p>
      </div>
    </div>
  );
}