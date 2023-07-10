import { memo } from "react";

function Todo({ addTodos, todos }) {

    console.log("inside todo.jsx file")

    return (
        <div>
            <h1>Todo here..</h1>
            {todos.map((todo) => (<p>
                {todo}
            </p>))}
            <button onClick={addTodos}>add Todo</button>

        </div>
    )
}
export default memo(Todo);