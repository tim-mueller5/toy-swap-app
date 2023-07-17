import EventCard from "./EventCard"

function AllEvents({ allEvents }) {

    const eventsToDisplay = allEvents.map((event) => (<EventCard event={event} key={event.id}/>))

    return (
    <div>
        <h3>All Events will show here</h3>
        {eventsToDisplay}
    </div>
    )
}

export default AllEvents