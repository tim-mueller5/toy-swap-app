
function ToyCard({ toy, onUserPage, handleDeleteClick }) {
    return (
        <div style={{border: "solid"}}>
            <p>{toy.name}</p>
            <img src={toy.image} alt={toy.name}/>
            <p>{toy.about}</p>
            {onUserPage ? <button onClick={() => handleDeleteClick(toy)}>Delete</button> : null}
        </div>
    )
}

export default ToyCard