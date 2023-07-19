
function ToyCard({ toy, onUserPage, handleToyDeleteClick, currentUser, allToys, setAllToys }) {

    const handleLike = () => {
        if(toy.likedBy.length === 0 || !toy.likedBy.includes(currentUser.name)){
            fetch(`http://localhost:3000/toys/${toy.id}`,{
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({likedBy: [...toy.likedBy, currentUser.name]}),
            })
            .then(resp => resp.json())
            .then(() => {
                const newToys = allToys.map((eachToy) => {
                    if(eachToy.id === toy.id){
                        return (
                            {
                                id: toy.id,
                                owner: toy.owner,
                                name: toy.name,
                                image: toy.image,
                                about: toy.about,
                                likedBy: [...toy.likedBy, currentUser.name]
                            }
                        )
                    } else{
                        return eachToy
                    }
                })
                setAllToys(newToys)
            })
        }
    }

    return (
        <div style={{border: "solid"}}>
            <p>{toy.name}</p>
            <img src={toy.image} alt={toy.name} style={{ height: 200 }}/>
            <p>About: {toy.about}</p>
            <div>{toy.likedBy}</div>
            <p>Likes: {toy.likedBy.length}</p>
            {currentUser.name !== "" && !onUserPage ? <button onClick={handleLike}>Like</button> : null}
            {onUserPage ? <button onClick={() => handleToyDeleteClick(toy)}>Delete</button> : null}
        </div>
    )
}

export default ToyCard