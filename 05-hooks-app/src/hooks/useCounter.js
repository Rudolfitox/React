import { useState } from 'react'

export const useCounter = (initialState) => {//initialState = 10
    const [counter, setCounter] = 
            useState(initialState);
    
    const increment = () => { //factor = 1
        setCounter(s => s + 1);
    }

    const decrement = () => { //factor = 1
        setCounter(s => s - 1);
    }

    const reset = () => {
        setCounter(initialState);
    }

    return {
        counter,
        increment,
        decrement,
        reset
    }
}
