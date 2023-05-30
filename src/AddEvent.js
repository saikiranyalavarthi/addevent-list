import React, { useState } from 'react';

function AddEvent() {
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventTime, setEventTime] = useState('');
  const [eventLocation, setEventLocation] = useState('');

  const handleAddEvent = (e) => {
    e.preventDefault();
    // Add event logic here
    console.log('Event added:', {
      name: eventName,
      date: eventDate,
      time: eventTime,
      location: eventLocation,
    });
    // Reset form fields
    setEventName('');
    setEventDate('');
    setEventTime('');
    setEventLocation('');
  };

  return (
    <div>
    <center><h2>Add Event</h2></center>
      <form onSubmit={handleAddEvent}>
        <div>
          <label>Event Name:</label>
          <input
            type="text"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
          />
        </div>
        <div>
          <label>Date:</label>
          <input
            type="date"
            value={eventDate}
            onChange={(e) => setEventDate(e.target.value)}
          />
        </div>
        <div>
          <label>Time:</label>
          <input
            type="time"
            value={eventTime}
            onChange={(e) => setEventTime(e.target.value)}
          />
        </div>
        <div>
          <label>Location:</label>
          <input
            type="text"
            value={eventLocation}
            onChange={(e) => setEventLocation(e.target.value)}
          />
        </div>
        <button type="submit">Add Event</button>
      </form>
    </div>
  );
}

export default AddEvent;
