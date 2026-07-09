import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function ConfirmationPage() {
  const location = useLocation();
  const state = location.state || {};
  const { selectedTime, selectedSeats } = state;

  // Guard: if someone navigates here directly without booking
  if (!selectedTime || !selectedSeats) {
    return (
      <div className="ui grid container">
        <div className="confirm-wrapper">
          <h2>No Booking Found</h2>
          <p>It looks like you came here directly. Please make a booking first.</p>
          <Link to="/">
            <div className="buttonSep" style={{ display: 'inline-block' }}>Go to Home</div>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="ui grid container">
      <div className="confirm-wrapper">
        <img src="/QRCode.png" alt="Booking QR Code" />
        <h2>🎉 Booking Confirmed!</h2>
        <p>
          Your reservation for <strong>{selectedSeats} seat{selectedSeats > 1 ? 's' : ''}</strong> at the <strong>{selectedTime}</strong> show has been confirmed.
        </p>
        <p style={{ fontSize: '13px', color: '#999' }}>
          Show this QR code at the cinema entrance.
        </p>
        <Link to="/">
          <div className="buttonSep" style={{ display: 'inline-block', marginTop: '10px' }}>
            ← Back to Home
          </div>
        </Link>
      </div>
    </div>
  );
}

export default ConfirmationPage;
