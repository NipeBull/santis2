import React, { useEffect, useState } from 'react';

function Events() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/events')
            .then(response => response.json())
            .then(data => setEvents(data));
    }, []);

    return (
        <div>
            <h1>Eventos</h1>
            <ul>
                {events.map(event => (
                    <li key={event._id}>
                        {event.name} - {new Date(event.date).toLocaleDateString()} - {event.location}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Events; 