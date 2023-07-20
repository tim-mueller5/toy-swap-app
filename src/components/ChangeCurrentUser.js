import { useState } from "react";

function ChangeCurrentUser({ currentUser, setCurrentUser, allUsers, setAllUsers }) {

    const [loginFormData, setLoginFormData] = useState({
        name: "",
        password: ""
    })

    const [newUserformData, setNewUserformData] = useState({
        name: "",
        password: "",
        isSignedIn: false
    })
    
    const handleLoginChange = (e) => {
        setLoginFormData({...loginFormData, [e.target.id]: e.target.value})
    }

    const handleNewUserChange = (e) => {
        setNewUserformData({...newUserformData, [e.target.id]: e.target.value})
    }

    const onLoginSubmit = (e) => {
        e.preventDefault();
        const loginAttempt = allUsers.filter((user) => {
            if(user.name === loginFormData.name && user.password === loginFormData.password){
                console.log(user)
                setCurrentUser(user)
                setLoginFormData({name: "", password: ""})
                return (user.name)
            } else {
                return null
            } 
        })
        if(loginAttempt.length === 0){
            alert("No matching username or incorrect password")
        }
    }

    const onCreateUserSubmit = (e) => {
        e.preventDefault();
        fetch("http://localhost:3000/users",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newUserformData),
        })
        .then(resp => resp.json())
        .then(newUser => {
            setCurrentUser(newUser)
            setAllUsers([...allUsers, newUser])
            setNewUserformData({
                name: "",
                password: "",
                isSignedIn: false
            })
        })
    }

    return (
        <div className="form">
            <div>
                <form onSubmit={onLoginSubmit}>
                    {currentUser.name === "" ? <h3>Login: </h3> : <h3>Change User: </h3>}
                    <label>Name: </label>
                    <input type="text" id="name" value={loginFormData.name} onChange={handleLoginChange}/>
                    <label> Password: </label>
                    <input type="password" id="password" value={loginFormData.password} onChange={handleLoginChange}/>
                    <button type="submit">Submit</button>
                </form>
            </div>
            <div>
                <form onSubmit={onCreateUserSubmit}>
                    <h3>Or Create New User: </h3>
                    <label>Name: </label>
                    <input type="text" id="name" value={newUserformData.name} onChange={handleNewUserChange}/>
                    <label> Password: </label>
                    <input type="password" id="password" value={newUserformData.password} onChange={handleNewUserChange}/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default ChangeCurrentUser