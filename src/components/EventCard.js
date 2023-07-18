
function EventCard({ event, handleEventDeleteClick }) {
    return (
        <div style={{border: "solid"}}>
            <p>Event Name: {event.name}</p>
            <p>Location: {event.location}</p>
            <p>Date: {event.about}</p>
            <button onClick={() => handleEventDeleteClick(event)}>Delete</button>
        </div>
    )
}

export default EventCard