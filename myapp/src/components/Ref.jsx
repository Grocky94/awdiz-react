import { useEffect, useRef, useState } from "react"

// const Ref = () => {
//     const sample = useRef(null);
//     const handleClick = () => {
//         sample.current.focus()
//     }
//     const [counter, setCounter] = useState(0);
  
//     return (
//         <div style={{ textAlign: " center" }}>
//             <input ref={sample} type="text" style={{ height: "5vh" }} />
//             <button onClick={handleClick} style={{ height: "5vh" }}>focus input</button>

//             <h1>Counter:{counter} </h1>
//             <button onClick={() => setCounter((prev) => prev + 1)}>Add</button>
//         </div>
//     )
// }

const Ref = () => {
 const [inputValue, setInputValue]= useState("");
 const previousValue = useRef("");
 const count = useRef(0);

 useEffect(()=>{
    previousValue.current = inputValue;
 },[inputValue]);

 useEffect(()=>{
    count.current = count.current + 1
 })
    return (
        <div style={{ textAlign: " center" }}>
          <h1>count- {count.current}</h1>
          <input type="text" value={inputValue} onChange={(e)=>setInputValue(e.target.value)}/>
          <h3>input value: {inputValue}</h3>
          <h3>previous value: {previousValue.current}</h3>
        </div>
    )
}
export default Ref