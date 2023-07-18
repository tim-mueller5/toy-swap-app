
function ToyCard({ toy, onUserPage, handleToyDeleteClick }) {
    return (
        <div style={{border: "solid"}}>
            <p>{toy.name}</p>
            <img src={toy.image} alt={toy.name}/>
            <p>{toy.about}</p>
            {onUserPage ? <button onClick={() => handleToyDeleteClick(toy)}>Delete</button> : null}
        </div>
    )
}

export default ToyCard