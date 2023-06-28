import { useState, useEffect } from "react"

function Type2UseEffect(){
    const[count, setcount] = useState(0)
 function change(){
    setcount((oldValue) => oldValue +1);
 }
    useEffect(()=> console.log("loged here"), [])
    return(
        <div>
            <h1>with Empty dependencies</h1>
            <h1>count:{count}</h1>
            <button onClick={change}>add +1</button>
        </div>
    )
}
export default Type2UseEffect