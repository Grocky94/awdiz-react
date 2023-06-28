import { useState } from "react";

function Section() {
    const [login, setLogin] = useState(false);

    function ShowLogIn(){
        setLogin(true);
    }
    function ShowLogOut(){
        setLogin(false);
    }
    return (
        <div>
            {login ? <h1>login</h1> : <h1>Logout</h1>}
            <button onClick={ShowLogIn}>show login</button>
            <button onClick={ShowLogOut}>show logout</button>
        </div>
    )

}

export default Section;