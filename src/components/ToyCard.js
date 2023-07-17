
function ToyCard({ toy }) {
    return (
        <div style={{border: "solid"}}>
            <p>{toy.name}</p>
            <img href={toy.image}/>
            <p>{toy.about}</p>
        </div>
    )
}

export default ToyCard