import { useState } from "react"
import ToyCard from "./ToyCard"

function UsersItemList({ allToys, setAllToys }) {

    const [currentUser, setCurrentUser] = useState("Tim")
    const [formData, setFormData] = useState({
        owner: currentUser,
        name: "",
        image: "",
        about: ""
    })

    const currentUsersToysToDisplay = allToys.map((toy) => {
        if(toy.owner === currentUser){
            return <ToyCard toy={toy} key={toy.id}/>
        }
    })

    const handleNewToySubmit = (e) => {
        e.preventDefault();
        console.log(formData)
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
            <h3>User's Items will live here</h3>
            <h4> Current User: {currentUser}</h4>
            <div>
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
            </div>
            <h5>Your Toys currently Listed:</h5>
            {currentUsersToysToDisplay}
        </div>
    )
}

export default UsersItemList