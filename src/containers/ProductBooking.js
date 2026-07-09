import '../App.css';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const TicketBookingPage = () => {
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState(0);
  const history = useHistory();

  const isSubmitDisabled = !(selectedTime && selectedSeats);

  const handleSubmit = () => {
    if (isSubmitDisabled) return;
    history.push({
      pathname: '/confirm',
      state: { selectedTime, selectedSeats }
    });
  };

  const times = ['11:00 AM', '3:00 PM', '6:30 PM', '10:00 PM'];
  const seats = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div className='ui grid container'>
      <div className="ticket-booking-container book_container">
        <h1>Book Your Tickets</h1>

        <div className="time-options">
          <p>Select a show time:</p>
          {times.map((time) => (
            <div
              key={time}
              className={`time-option ${selectedTime === time ? 'selected' : ''}`}
              onClick={() => setSelectedTime(time)}
            >
              {time}
            </div>
          ))}
        </div>

        <div className="seat-options">
          <p>Select number of seats:</p>
          {seats.map((numSeats) => (
            <div
              key={numSeats}
              className={`seat-option ${selectedSeats === numSeats ? 'selected' : ''}`}
              onClick={() => setSelectedSeats(numSeats)}
            >
              {numSeats}
            </div>
          ))}
        </div>

        {/* Fixed: removed <Link> wrapper — it was navigating even when button was disabled */}
        <button
          disabled={isSubmitDisabled}
          onClick={handleSubmit}
          className='buttonSep'
          style={{ marginTop: '20px', width: '100%' }}
        >
          BOOK TICKETS
        </button>

        {isSubmitDisabled && (
          <p style={{ color: '#999', fontSize: '12px', marginTop: '8px' }}>
            Please select a time and number of seats to continue
          </p>
        )}
      </div>
    </div>
  );
};

export default TicketBookingPage;
