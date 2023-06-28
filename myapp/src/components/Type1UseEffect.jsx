import { useEffect, useState } from "react";

function Type1UseEffect() {

    const [count, setcount] = useState(0)
    useEffect(() => { console.log("inside useEffect")})

    function addition() {
        setcount((prevValue) => prevValue + 1)
    }

    return (
        <div>
            <h1>with No dependencies</h1>
            <h1>{count}</h1>
            <button onClick={addition}>add +1</button>
        </div>
    )
}

export default Type1UseEffect;