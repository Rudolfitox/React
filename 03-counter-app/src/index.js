//console.log('Hola mundo');
import React from 'react';
import ReactDOM from 'react-dom';
import PrimeraApp from './PrimeraApp';

import './index.css'
//const saludo = <h1>Hola mundos</h1>;
const divRoot = document.querySelector('#app');

ReactDOM.render(<PrimeraApp saludo={'Hola, soy Rudolf'}/>,divRoot);
//console.log(saludo);