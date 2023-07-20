import { useState } from "react"
import EventCard from "./EventCard"

function AllEvents({ allEvents, setAllEvents, currentUser }) {

    const [formData, setFormData] = useState({
        name: "",
        owner: currentUser.name,
        date: "",
        location: "",
        likedBy: []
    })

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

    const handleNewEventSubmit = (e) => {
        e.preventDefault()
        if(formData.name === "" || formData.location === "" || formData.date === ""){
            alert("Please fill out all sections")
        } else{
            fetch("http://localhost:3000/events",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            })
            .then(resp => resp.json())
            .then(newItem => setAllEvents([...allEvents, newItem]))
        }
    }

    const eventsToDisplay = allEvents.map((event) => (<EventCard event={event} key={event.id} handleEventDeleteClick={handleEventDeleteClick} currentUser={currentUser} allEvents={allEvents} setAllEvents={setAllEvents} />))

    const handleChange = (e) => {
        setFormData({...formData, [e.target.id]: e.target.value})
    }

    return (
    <div className="allevents">
        <h3>All Events will show here</h3>
        {eventsToDisplay}
        {currentUser.name === "" 
        ? <h3 className="form">Login to add new events</h3>
        : <div className="form">
            <form onSubmit={handleNewEventSubmit}>
                <h3>Add New Event: </h3>
                <label htmlFor="name"> Event Name: </label>
                <input type="text" id="name" value={formData.name} onChange={handleChange} ></input>
                <label htmlFor="location"> Location: </label>
                <input type="text" id="location" value={formData.location} onChange={handleChange}></input>
                <label htmlFor="date"> Date: </label>
                <input type="text" id="date" value={formData.date} onChange={handleChange}></input>
                <button type="submit"> Submit </button>
            </form>
        </div>
        }
    </div>
    )
}
 
export default AllEvents