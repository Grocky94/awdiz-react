import { useState } from "react"
import { useNavigate } from "react-router-dom";

function FromSingleState() {
    const [userData, setUserData] = useState({ name: "", email: "", password: "" });
    const router = useNavigate();
    function handleChange(event) {
        // console.log(event.target.name, "-label");
        // console.log(event.target.value, "-value");
        setUserData({ ...userData, [event.target.name]: event.target.value })
    }

    async function submitHandler(event) {
        event.preventDefault();
        if (!userData.name) return alert(" require to fill name!!");
        if (!userData.email) return alert("require to fill email!!");
        if (!userData.password) return alert("require to fill password!!");
        if (userData.password.length < 6) return alert("minimum  5 characters require")


        setUserData({ name: '', email: '', password: '' })
        alert("registration Done!!")
        router('/');

    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                <label>name:</label><br />
                <input type="text" value={userData.name} name="name" onChange={handleChange} /><br />
                <label>email:</label><br />
                <input type="email" value={userData.email} name="email" onChange={handleChange} /><br />
                <label>password</label><br />
                <input type="password" value={userData.password} name="password" onChange={handleChange} /><br />
                <input type="submit"/>
            </form>
        </div>
    )
}
export default FromSingleState