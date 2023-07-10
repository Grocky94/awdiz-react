import { useCallback, useState } from "react";
import Todo from "./Todo";
function UseCallBack() {
    const [todos, setTodos] = useState(['complete assignment', 'have lunch']);
    const [counter, setCounter] = useState(0);

    // function addTodo() {
    //     setTodos([...todos, "Come to classroom"])
    // }

    const addTodos = useCallback(() => { setTodos([...todos, 'go to class']) }, [todos])

    
    return (
        <div>
            <Todo todos={todos} addTodos={addTodos} />
            <h1>counter: {counter}</h1>
            <button onClick={() => setCounter((previousValue) => previousValue + 1)}>+</button>
        </div>
    )
}
export default UseCallBack