import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';


function EventList() {
  const [events, setEvents] = useState([
    { id: 1, name: 'Event 1', date: '2023-05-27', time: '05:00', location: 'Location 1', liked: false },
    { id: 2, name: 'Event 2', date: '2023-05-28', time: '08:00', location: 'Location 2', liked: false },
    { id: 3, name: 'Event 3', date: '2023-05-29', time: '12:00', location: 'Location 3', liked: false },
  ]);

  const handleLike = (eventId) => {
    setEvents((prevEvents) =>
      prevEvents.map((event) =>
        event.id === eventId ? { ...event, liked: !event.liked } : event
      )
    );
  };

  return (
   
    <div>
      <center>
   <h2>Event List</h2> 
      {events.map((event) => (
        <div key={event.id}>
          <h3>{event.name}</h3>
          <p>Date: {event.date}</p>
          <p>Time: {event.time}</p>
          <p>Location: {event.location}</p>
          <button onClick={() => handleLike(event.id)}>
            {event.liked ? <FaHeart color="red" /> : <FaHeart />}
          </button>
          <hr />
        </div>
       
      ))}
   </center> </div>
  );
}

export default EventList;
