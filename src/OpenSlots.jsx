// src/components/AppointmentScheduling/OpenSlots.js
import React from 'react';

const OpenSlots = ({ openSlots, onSlotClick, bookedSlots }) => {
  return (
    <div>
      <h3>Available Slots:</h3>
      <ul>
        {openSlots.map((slot) => (
          <li
            key={slot.id}
            onClick={() => onSlotClick(slot)}
            style={{ cursor: 'pointer', color: bookedSlots.includes(slot.id) ? 'grey' : 'black' }}
          >
            {slot.time}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OpenSlots;
