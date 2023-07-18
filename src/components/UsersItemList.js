import { useState } from "react"
import ToyCard from "./ToyCard"
import ChangeCurrentUser from "./ChangeCurrentUser"

function UsersItemList({ currentUser, setCurrentUser, allToys, setAllToys, allUsers, setAllUsers }) {
    
    const [formData, setFormData] = useState({
        owner: currentUser.name,
        name: "",
        image: "",
        about: ""
    })
    
    const handleToyDeleteClick = (toy) => {
        fetch(`http://localhost:3000/toys/${toy.id}`, {
            method: "DELETE",
        })
        .then(resp => resp.json())
        .then(() => {
            const updatedToys = allToys.filter((eachtoy) => eachtoy.id !== toy.id)
            setAllToys(updatedToys)
        })
    }

    const currentUsersToysToDisplay = allToys.map((toy) => {
        if(toy.owner === currentUser.name){
            return <ToyCard toy={toy} key={toy.id} onUserPage="true" handleToyDeleteClick={handleToyDeleteClick}/>
        } else {
            return null
        }
    })

    const handleNewToySubmit = (e) => {
        e.preventDefault();
        fetch("http://localhost:3000/toys",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
        .then(resp => resp.json())
        .then(newItem => setAllToys([...allToys, newItem]))
    }

    const handleChange = (e) => {
        setFormData({...formData, [e.target.id]: e.target.value})
    }

    return (
        <div>
            {currentUser.name === "" 
            ? <h3>Login to see your listings</h3> 
            :   <div>
                    <form onSubmit={handleNewToySubmit}>
                        <h3>Add New Toy To List:</h3>
                        <label htmlFor="name"> Toy Name: </label>
                        <input type="text" id="name" value={formData.name} onChange={handleChange}/>
                        <label htmlFor="image"> Toy Image URL: </label>
                        <input type="text" id="image" value={formData.image} onChange={handleChange}/>
                        <label htmlFor="about"> Toy details: </label>
                        <input type="text" id="about" value={formData.about} onChange={handleChange}/>
                        <button type="submit">Submit</button>
                    </form>
                    <h5>Your Toys currently Listed:</h5>
                    {currentUsersToysToDisplay}
                </div>
            }
            <ChangeCurrentUser currentUser={currentUser} setCurrentUser={setCurrentUser} allUsers={allUsers} setAllUsers={setAllUsers}/>
        </div>
    )
}

export default UsersItemList