import ToyCard from "./ToyCard"

function AllItemsList({ allToys, currentUser, setAllToys }) {
    

    const toysToDisplay = allToys.map((toy) => (<ToyCard toy={toy} key={toy.id} currentUser={currentUser} allToys={allToys} setAllToys={setAllToys} />))

    return (
        <div>
            <h3>All items up for the taking will render here</h3>
            {toysToDisplay}
        </div>
    )
}

export default AllItemsList