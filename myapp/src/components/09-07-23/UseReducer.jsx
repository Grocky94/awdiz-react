import React from 'react'
import { useReducer } from 'react';


const reducer = (state, action) => {
    switch (action.type) {
        case "INCREMENT":
            return { count: state.count + 1 };
        case "DECREMENT":
            return { count: state.count - 1 };
        case "RESET":
            return { count: 0 };
        case "PAYLOAD":
            return { count: state.count + action.payload };
    }
}

const UseReducer = () => {

    const initialValue = { count: 0 }
    const [state, dispatch] = useReducer(reducer, initialValue);

    const increment = () => {
        dispatch({ type: "INCREMENT" });
    }
    const decrement = () => {
        dispatch({ type: "DECREMENT" });
    };

    const reset = () => {
        dispatch({ type: "RESET" });
    };

    const payload = () => {
        dispatch({ type: "PAYLOAD", payload: 98765 })
    }

    return (
        <div>
            <h1>count:{state.count}</h1>
            <button onClick={increment}>INCREMENT</button>
            <button onClick={decrement}>DECREMENT</button>
            <button onClick={reset}>RESET</button>
            <button onClick={payload}>PAYLOAD</button>
        </div>
    )
}


export default UseReducer
