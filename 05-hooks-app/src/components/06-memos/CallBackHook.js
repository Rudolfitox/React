import React, { useCallback, useState } from 'react'
import { ShowIncrement } from './ShowIncrement';

import './memo.css'

export const CallBackHook = () => {
    const [counter, setCounter] = useState(10);


    //Esta función por cada renderización se 
    //almacena en un nuevo espacio de memoria diferente
    // const increment = () => {
    //     setCounter(c => c + 1);
    // }

    //Se utiliza para memorizar funciones que seran pasadas a otros componentes
    // y que no va cambiar si la dependencia no cambia
    const increment = useCallback((num) => {
            setCounter(c => c + num);
        },
        [ setCounter ]
    )


    return (
        <div>
            <h1>useCallback Hook:{counter}</h1>
            <hr/>

            <ShowIncrement increment={increment} />

        </div>
    )
}
