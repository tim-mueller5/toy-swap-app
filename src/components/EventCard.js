
function EventCard({ event, handleEventDeleteClick, currentUser, allEvents, setAllEvents }) {

    const handleEventLike = () => {
        if(event.likedBy.length === 0 || !event.likedBy.includes(currentUser.name)){
            console.log("fetch run")
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
                                about: event.about,
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
        }
    }

    return (
        <div style={{border: "solid"}}>
            <p>Event Name: {event.name}</p>
            <p>Location: {event.location}</p>
            <p>Date: {event.about}</p>
            <p>Owner: {currentUser.name === event.owner ? "You" : event.owner}</p>
            {currentUser.name !== "" ? <button onClick={handleEventLike}>Like / Plan on attending</button> : null}
            {currentUser.name === event.owner ? <button onClick={() => handleEventDeleteClick(event)}>Delete</button>: null}
        </div>
    )
}
 
export default EventCard