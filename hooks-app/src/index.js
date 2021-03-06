import React from 'react';
import ReactDOM from 'react-dom';
// import { CounterApp } from './components/01-useState/CounterApp';
// import { CounterWithCustomHook } from './components/01-useState/CounterWithCustomHook';
// import { SimpleForm } from './components/02-useEffect/SimpleForm';
// import HookApp from './HookApp';

import { FormWithCustomHook } from './components/02-useEffect/FormWithCustomHook';


const divRoot = document.querySelector('#root');

//ReactDOM.render(<CounterApp />,divRoot);
//ReactDOM.render(<CounterWithCustomHook/>,divRoot);
// ReactDOM.render(<SimpleForm/>,divRoot);

ReactDOM.render(<FormWithCustomHook/>,divRoot);