import React, { useContext, useEffect, useState } from 'react';
import "./Profile.css"
import { MyContext } from '../../context/context';
import { useNavigate } from 'react-router-dom';


const Profile = () => {

    const { login } = useContext(MyContext);
    const [userData, setUserData] = useState();
    const [previousData, setPreviousData] = useState();

    const router = useNavigate();
    // console.log(userData)
    useEffect(() => {
        const currentUser = JSON.parse(localStorage.getItem("Current-User"));
        if (!currentUser) {
            router("/login")
        }
        const allUser = JSON.parse(localStorage.getItem("Users"));
        if (currentUser && allUser) {
            for (let i = 0; i < allUser.length; i++) {
                if (allUser[i].email == currentUser.email && allUser[i].password == currentUser.password) {
                    setUserData(allUser[i]);
                }
            }
        }
    }, [])

    const handleChange = (event) => {
        setUserData({ ...userData, [event.target.name]: event.target.value })
    }

    const handleOnSubmit = (event) => {
        event.preventDefault();
        const currentUser = JSON.parse(localStorage.getItem("Current-User"));
        const allUser = JSON.parse(localStorage.getItem("Users"));
        for (let i = 0; i < allUser.length; i++) {
            if (allUser[i].email == currentUser.email && allUser[i].password == currentUser.password) {
                if (currentUser) {
                    allUser[i].name = userData.name;
                    allUser[i].password = userData.password;
                    currentUser.name = userData.name;
                    currentUser.password = userData.password;
                    setPreviousData(allUser[i])
                }
            }
        }
        login(currentUser);
        localStorage.setItem("Current-User", JSON.stringify(currentUser));
        localStorage.setItem("Users", JSON.stringify(allUser));
        setUserData({});
        alert("profile Updated")
    }
    return (
        <div>
            <div id="algin-parent">
                <div id="previous-data-side">
                    <h1>User Profile</h1>
                    <p>Email:<span className='previous-value' >{userData?.email}</span></p>
                    <p>Name:<span className='previous-value' >{userData?.name}</span></p>
                    <p>Password:<span className='previous-value' >{userData?.password}</span></p>
                </div>
                <div id='update-side'>
                    <h1>Update Profile</h1>
                    <form id="update-form" onSubmit={handleOnSubmit}>
                        <label>Email:</label>
                        <input className='profile-input-email' disabled value={userData?.email} /><br />
                        <label>Name:</label>
                        <input className="profile-input-name" type="text" name="name" onChange={handleChange} /><br />
                        <label>Password:</label>
                        <input className="profile-input" type="password" name="password" onChange={handleChange} />
                        <input id="submit-btn" type='submit' />
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Profile
