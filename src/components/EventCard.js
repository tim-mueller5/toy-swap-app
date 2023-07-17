
function EventCard({ event }) {
    return (
        <div>
            <p>Event Name: {event.name}</p>
            <p>Location: {event.location}</p>
            <p>Date: {event.about}</p>
        </div>
    )
}

export default EventCard