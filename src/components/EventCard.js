
function EventCard({ event, handleEventDeleteClick, currentUser }) {
    console.log(event.owner)
    return (
        <div style={{border: "solid"}}>
            <p>Event Name: {event.name}</p>
            <p>Location: {event.location}</p>
            <p>Date: {event.about}</p>
            <p>Owner: {currentUser.name === event.owner ? "You" : event.owner}</p>
        {currentUser.name === event.owner ? <button onClick={() => handleEventDeleteClick(event)}>Delete</button>: null}
        </div>
    )
}
 
export default EventCard