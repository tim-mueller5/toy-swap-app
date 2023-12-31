
function EventCard({ event, handleEventDeleteClick, currentUser, allEvents, setAllEvents }) {

    const handleEventLike = () => {
        if(event.likedBy.length === 0 || !event.likedBy.includes(currentUser.name)){
            fetch(`http://localhost:3000/events/${event.id}`,{
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({likedBy: [...event.likedBy, currentUser.name]}),
            })
            .then(resp => resp.json())
            .then(() => {
                const updatedEvents = allEvents.map((eachEvent) => {
                    if(eachEvent.id === event.id){
                        return (
                            {
                                id: event.id,
                                name: event.name,
                                owner: event.owner,
                                date: event.date,
                                location: event.location,
                                likedBy: [...event.likedBy, currentUser.name]
                            }
                        )
                    } else {
                        return eachEvent
                    }
                })
                setAllEvents(updatedEvents)
            })
        } else if (event.likedBy.includes(currentUser.name)){
            const filteredLikedBy = event.likedBy.splice((event.likedBy.includes(currentUser.name)))
            fetch(`http://localhost:3000/events/${event.id}`,{
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({likedBy: filteredLikedBy}),
            })
            .then(resp => resp.json())
            .then(() => {
                const newEvents = allEvents.map((eachEvent) => {
                    if(eachEvent.id === event.id){
                        return (
                            {
                                id: event.id,
                                name: event.name,
                                owner: event.owner,
                                date: event.date,
                                location: event.location,
                                likedBy: filteredLikedBy
                            }
                        )
                    } else{
                        return eachEvent
                    }
                })
                setAllEvents(newEvents)
            })
        }
    }

    const likesToDisplay = event.likedBy.map(like => (like + ", "))

    return (
        <div className="eventcard">
            <h4>Event Name: {event.name}</h4>
            <p>Location: {event.location}</p>
            <p>Date: {event.date}</p>
            <p>Owner: {currentUser.name === event.owner ? "You" : event.owner}</p>
            <p>People plan on attending: {likesToDisplay}</p>
            {currentUser.name !== "" ? <button onClick={handleEventLike}>{event.likedBy.includes(currentUser.name) ? "Unlike / Not planning on attending" : "Like / Plan on attending" }</button> : null}
            {currentUser.name === event.owner ? <button onClick={() => handleEventDeleteClick(event)}>Delete</button>: null}
        </div>
    )
}

export default EventCard