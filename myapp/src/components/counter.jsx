import { useState } from "react"

function Counter() {
    const [count, setcount] = useState(0);
    console.log(count, "-count")
    function Add(){
        setcount((prevValue)=>  prevValue + 1);
    }
function Sub(){
    setcount((prevValue)=> prevValue - 1);

}
    
    return (
        <div>
            <h1>Counter:{count}</h1>
            <button onClick={Add}>+ Addition by 1</button>
             <button onClick={Sub}>- substraction by 1</button>
        </div>
    )
}

export default Counter;