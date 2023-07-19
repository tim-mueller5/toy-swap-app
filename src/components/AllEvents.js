import EventCard from "./EventCard"

function AllEvents({ allEvents, setAllEvents, currentUser }) {

    const handleEventDeleteClick = (event) => {
        fetch(`http://localhost:3000/events/${event.id}`, {
            method: "DELETE",
        })
        .then(resp => resp.json())
        .then(() => {            
            const updatedEvents = allEvents.filter((eachevent) => eachevent.id !== event.id)
            setAllEvents(updatedEvents)
        })
    }

    const eventsToDisplay = allEvents.map((event) => (<EventCard event={event} key={event.id} handleEventDeleteClick={handleEventDeleteClick} currentUser={currentUser}/>))

    return (
    <div>
        <h3>All Events will show here</h3>
        {eventsToDisplay}
    </div>
    )
}
 
export default AllEvents