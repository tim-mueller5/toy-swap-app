import { useState } from "react"
import ToyCard from "./ToyCard"

function UsersItemList({ allToys }) {

    const [currentUser, setCurrentUser] = useState("Tim")

    const currentUsersToysToDisplay = allToys.map((toy) => {
        if(toy.owner === currentUser){
            return <ToyCard toy={toy} key={toy.id}/>
        }
    })

    return (
        <div>
            <h3>User's Items will live here</h3>
            <h4> Current User: {currentUser}</h4>
            <h5>Your Toys currently Listed:</h5>
            {currentUsersToysToDisplay}
        </div>
    )
}

export default UsersItemList