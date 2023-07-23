import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { MyContext } from "../context/context";

function Navbar() {
    const { state,logout } = useContext(MyContext);
    const [isUserLoggedIn, setIsUserLoggedIn] = useState({});
    const router = useNavigate();
    useEffect(() => {
        if (state?.user) {
            setIsUserLoggedIn(state?.user);
        } else {
            setIsUserLoggedIn({})
        }
    }, [state]);
    return (
        <div>
            <div style={{ height: "4vh", width: "100%", background: "black", display: "flex", color: "white", alignItems: "center" }}>
                <div style={{ height: "95%", width: "5%", border: "1px solid white", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "600", cursor: "pointer" }} onClick={() => router('/')}>Awdiz</div>
                {isUserLoggedIn?.email ? <button onClick={()=>logout()} style={{ color: "black" }}>LogOut</button> :
                    <button style={{ marginLeft: "2%" }} onClick={() => router('/login')}>LogIN </button>}
                <div style={{ fontWeight: "600", marginLeft: "2%", cursor: "pointer" }} onClick={() => (router("/productFromBackend"))}>Product</div>
                <div style={{ fontWeight: "600", marginLeft: "2%", cursor: "pointer" }} onClick={() => (router("/cart"))}> Cart</div>
            </div>
        </div>
    )
}

export default Navbar