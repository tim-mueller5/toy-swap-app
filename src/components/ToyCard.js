
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
        } else if (toy.likedBy.includes(currentUser.name)){
            const filteredLikedBy = toy.likedBy.splice((toy.likedBy.includes(currentUser.name)))
            fetch(`http://localhost:3000/toys/${toy.id}`,{
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({likedBy: filteredLikedBy}),
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
                                likedBy: filteredLikedBy
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

    const likesToDisplay = toy.likedBy.map(like => (like + ", "))

    return (
        <div className="toycard">
            <p>{toy.name}</p>
            <img src={toy.image} alt={toy.name} style={{ height: 200 }}/>
            <p>Listed by: {toy.owner}</p>
            <p className="about">About: {toy.about}</p>
            <div>Liked by: {likesToDisplay}</div>
            <p>Likes: {toy.likedBy.length}</p>
            {currentUser.name !== "" && !onUserPage ? <button onClick={handleLike}>{toy.likedBy.includes(currentUser.name) ? "Unlike" : "Like" }</button> : null}
            {onUserPage ? <button onClick={() => handleToyDeleteClick(toy)}>Delete</button> : null}
        </div>
    )
}

export default ToyCard