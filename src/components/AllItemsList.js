import ToyCard from "./ToyCard"

function AllItemsList({ allToys, currentUser, setAllToys }) {
    

    const toysToDisplay = allToys.map((toy) => (<ToyCard toy={toy} key={toy.id} currentUser={currentUser} allToys={allToys} setAllToys={setAllToys} />))

    return (
        <div className="allitemslist">
            <h3>All Items Available for Swap:</h3>
            {toysToDisplay}
        </div>
    )
}

export default AllItemsList