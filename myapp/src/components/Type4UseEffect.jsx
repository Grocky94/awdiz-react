
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";

function Type4UseEffect() {
    const [counter, setcount] = useState(0)
    const [counter1, setcount1] = useState(0)
    let movementTo = useNavigate();

    function Btn() {
        setcount((oldValue) => oldValue + 1);
    }
    function Btn1() {
        setcount1((num) => num + 1);
        if (counter1 === 20) {
            movementTo("/");
        }
    }

    useEffect(() => console.log("loged here"), [counter, counter1])
    // useEffect(() => console.log("loged here"), [])
   
    function Navit (){
       movementTo("/")
    }
    

    return (
        <div>
            <h1>multiple dependencies in one useEffects </h1>
            <h1>first Counter:{counter}</h1>
            <button onClick={Btn}>add +1</button>          
            <h1>second Counter:{counter1}</h1>
            <button onClick={Btn1}>add +1</button>
            <p>Note:if second Counter reaches 20 count will navigate to home page</p>

            <h1>Go back to home page</h1>
            <button onClick={Navit}>Go Home</button>
        </div>
    )
}
export default Type4UseEffect