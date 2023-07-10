
import { useState, useEffect } from "react"

function Type3UseEffect() {
    const [counter, setcount] = useState(0)
    const [counter1, setcount1] = useState(0)
    function Btn() {
        setcount((oldValue) => oldValue + 1);
    }
    function Btn1() {
        setcount1((num) => num + 1);

    }
    useEffect(() => console.log("loged here"), [counter])
    // useEffect(() => console.log("loged here"), [])
   
    return (
        <div>
            <h1>only single dependencies pass in useEffects </h1>
            <h1>firstCounter:{counter}</h1>
            <button onClick={Btn}>add +1</button>
            <h1>secondCounter:{counter1}</h1>
            <button onClick={Btn1}>add +1</button>
        </div>
    )
}
export default Type3UseEffect