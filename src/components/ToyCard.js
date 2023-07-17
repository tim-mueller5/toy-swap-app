
function ToyCard({ toy }) {
    return (
        <div style={{border: "solid"}}>
            <p>{toy.name}</p>
            <img src={toy.image} alt={toy.name}/>
            <p>{toy.about}</p>
        </div>
    )
}

export default ToyCard