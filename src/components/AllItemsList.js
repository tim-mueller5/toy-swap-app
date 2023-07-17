import ToyCard from "./ToyCard"

function AllItemsList({ allToys }) {

    const toysToDisplay = allToys.map((toy) => (<ToyCard toy={toy} key={toy.id} />))

    return (
        <div>
            <h3>All items up for the taking will render here</h3>
            {toysToDisplay}
        </div>
    )
}

export default AllItemsList