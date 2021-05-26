/*
const element = document.createElement("h1");// crea elemento
element.innerText = "Jovenes Programadores"; //texto que vamos a colocar

const container = document.getElementById('root');//crea variable que obtiene la ID

container.appendChild(element); //que queremos mostrar
*/

import React from 'react';
import ReactDOM from 'react-dom'

function ticTac(){
  const element = (
    <div>
      <h2> Son las {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  const container = document.getElementById('root');
  ReactDOM.render(element, container);
}
setInterval(ticTac,1000);