import React, { useMemo, useState } from 'react'

const UseMemo = () => {
    const [todos, setTodos] = useState(["eat lunch", "do assignment"]);
    const [counter, setCounter] = useState(0);

    function addtodo(){
        setTodos([...todos, 'New todos'])
    }
    const Number = useMemo(() => (expensiveCalculation(counter)),[counter])
    return (
        <div>
            <h1>expensiveCalculation:{Number}</h1>
            <h1>counter: {counter}</h1>
            <button onClick={()=>setCounter((previousValue) => previousValue + 1)}>+</button>
            <h1>todos..</h1>
            {todos.map((todos, i)=>(
                <h3 key={i}>{todos}</h3>
            ))}
            <button onClick={addtodo}>add todos</button>
        </div>
    )
}

const expensiveCalculation = (number) => {
console.log("inside expensive calclation...")
    for (let i = 0; i < 100000000; i++) {
        number = number + 1
    }
    return number
}
export default UseMemo
