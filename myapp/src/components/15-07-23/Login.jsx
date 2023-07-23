import { useState,useContext } from "react"
import { useNavigate } from 'react-router-dom'
import { MyContext } from "../../context/context"

const Login = () => {
    const {state, login} = useContext(MyContext);
    console.log(state, "state here from login");
    const [userData, setUserData] = useState({ email: '', password: '' })

    const route = useNavigate();
    function reg() {
        route('/register')
    }
    const handleChange = (event) => {
        setUserData((userData)=>({ ...userData, [event.target.name]: event.target.value }))
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        if (userData.email && userData.password) {
            const users = JSON.parse(localStorage.getItem('Users'))
            let flag = false
            for (let i = 0; i < users.length; i++) {
                if (users[i].email == userData.email && users[i].password == userData.password) {
                    flag = true;
                    break;
                }
            }

            if (flag == false) {
                return alert('please check your credentials')
            }
            else {
                // console.log(userData)
                localStorage.setItem("Current-User", JSON.stringify(userData));
                // console.log(localStorage.setItem("Current-User", JSON.stringify(userData)))
                login(userData);
                alert('login successful');
                route('/')
                setUserData({ email: '', password: '' })
            }
        } else {
            alert('fill all fields')
        }
    }

    return (
        <div style={{ margin: 'auto', height: "35vh", width: "16%", textAlign: "center" }}>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label>Email</label><br />
                <input type='email' name='email' onChange={handleChange} /><br />
                <label>Password</label><br />
                <input type='password' name='password' onChange={handleChange} /><br />
                <input type='submit' value='login' /><br />
                <p>if not <span style={{ color: "blue", textDecoration: "underline", cursor: "pointer" }} onClick={reg}>register</span></p>
            </form>
        </div>
    )
}
export default Login