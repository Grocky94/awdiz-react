import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { MyContext } from "./../context/context"


function Home() {
    const {state,logout} = useContext(MyContext);
    console.log(state, "state here in home");
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
    const router = useNavigate();

    useEffect(() => {
        if (state?.user?.email){
            setIsUserLoggedIn(true);  
        }else{
            setIsUserLoggedIn(false);
        }
    }, [state])
    return (
        <div>
            {isUserLoggedIn ? <button onClick={()=>logout()}>Logout</button> : <button onClick={() => router('/login')}>Login</button>}
            <div style={{ backgroundImage: `url("https://img.freepik.com/free-vector/welcome-word-flat-cartoon-people-characters_81522-4207.jpg?size=626&ext=jpg")`, height: "100vh", width: "100%", backgroundRepeat: "no-repeat", backgroundSize: "auto", backgroundPosition: "center" }}>
            </div>
        </div>
    )
}
export default Home