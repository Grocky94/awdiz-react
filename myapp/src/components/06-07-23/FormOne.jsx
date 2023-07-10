import { useState } from "react"

const FormOne = () => {
    const styled = {
        border: '5px solid black',
        width: '250px',
        margin: 'auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    }
    const [userName, setName] = useState("");
    const [userEmail, setEmail] = useState("");
    const [userPassword, setPassword] = useState("");
    console.log(userName, "-name");
    console.log(userEmail, "-email");
    console.log(userPassword, "-password");
    function forName(e) {
        setName(e.target.value)
        // console.log(e.target.value)
    }
    function forEmail(e) {
        setEmail(e.target.value)
        // console.log(e.target.value)
    }
    function forPassword(e) {
        setPassword(e.target.value)
        // console.log(e.target.value)
    }
    function submitData(e) {
        e.preventDefault();
    
        if (!userName) {
            return alert('You missed to fill name!!');
        }
        if (userName.length < 5) {
            return alert('Name requires a minimum of 5 characters.');
        }
        
        if (!userEmail) {
            return alert('Email is required!');
        }
        if (!userPassword) {
            return alert('Password is required!');
        }
        if (userPassword.length < 8) {
            return alert('Password must be at least 6 characters long!');
        }
    
        const res = { data: { message: "ok", status: 200 } }

        if (res.data.message == "ok") {
            return alert("Resgistration Completed!")
        } else {
            return alert("Internal error, Please try again..")
        }
        // Rest of your code for submitting the form
    }
     return (
        < div style={styled}>
            <form onSubmit={submitData}>
                <label >Name:</label><br></br>
                <input type="text" onChange={forName} /><br></br>
                <label >Email:</label><br></br>
                <input type="email" onChange={forEmail} /><br></br>
                <label >Password:</label><br></br>
                <input type="password" onChange={forPassword} /><br></br>
                <input type="submit" value="Register" />
            </form>
        </div>
    )
}
export default FormOne