// AppointmentScheduling.js
import React, { useState } from 'react';

const WEEKDAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const AppointmentScheduling = () => {
  const [selectedContact, setSelectedContact] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);

  const contactAvailability = {
    Monday: { available: ['9:00 AM - 2:00 PM'], unavailable: ['12:00 PM - 1:00 PM'] },
    Tuesday: { available: ['9:00 AM - 2:00 PM'], unavailable: ['12:00 PM - 1:00 PM'] },
    Wednesday: { available: ['9:00 AM - 2:00 PM'], unavailable: ['12:00 PM - 1:00 PM'] },
    Thursday: { available: ['9:00 AM - 2:00 PM'], unavailable: ['12:00 PM - 1:00 PM'] },
    Friday: { available: ['11:00 AM - 7:00 PM'], unavailable: ['8:30 PM - 11:00 PM'] },
    Saturday: { available: ['9:30 AM - 4:30 PM'], unavailable: ['5:30 PM - 8:30 PM'] },
    Sunday: { available: [], unavailable: [] },
  };

  const bookedSlots = {
    '2023-12-01': ['9:30 AM', '1:30 PM'],
    '2023-12-05': ['11:30 AM', '5:00 PM'],
  };

  const generateTimeSlots = (day) => {
    const availableSlots = contactAvailability[day]?.available || [];
    const unavailableSlots = contactAvailability[day]?.unavailable || [];

    const allSlots = Array.from({ length: 24 }, (_, index) => `${index}:00`);
    const filteredSlots = allSlots.filter(
      (slot) =>
        availableSlots.every((availableSlot) => !slot.includes(availableSlot)) &&
        unavailableSlots.every((unavailableSlot) => !slot.includes(unavailableSlot))
    );

    return filteredSlots;
  };

  const handleSlotSelection = (timeSlot) => {
    console.log('Selected slot:', timeSlot);
  };

  return (
    <div>
      <h2>Appointment Scheduling Page</h2>
      <p>Select a contact:</p>
      <select onChange={(e) => setSelectedContact(e.target.value)} value={selectedContact}>
        <option value="contact1">Contact 1</option>
        <option value="contact2">Contact 2</option>
      </select>

      <p>Select a date:</p>
      <input type="date" onChange={(e) => setSelectedDate(e.target.value)} value={selectedDate} />

      {selectedContact && selectedDate && (
        <div>
          <h3>Available Slots for {selectedDate}</h3>
          <table>
            <thead>
              <tr>
                <th>Time Slot</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {WEEKDAYS.map((day) => (
                <tr key={day}>
                  <td>{day}</td>
                  <td>
                    {generateTimeSlots(day).map((timeSlot) => (
                      <div
                        key={timeSlot}
                        className={bookedSlots[selectedDate]?.includes(timeSlot) ? 'booked' : 'available'}
                        onClick={() => handleSlotSelection(`${selectedDate} ${timeSlot}`)}
                      >
                        {timeSlot}
                      </div>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AppointmentScheduling;