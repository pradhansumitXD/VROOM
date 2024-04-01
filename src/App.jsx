// BookingPopup.js
import React, { useState } from 'react';
import './App.css'; // Import your CSS file for styling
import {Vroom} from './components'

const BookingPopup = () => {
  const [pickupLocation, setPickupLocation] = useState('');
  const [pickupDate, setPickupDate] = useState('');

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to the server)
    console.log('Booking submitted:', pickupLocation, pickupDate, carType);
  };

  return (
  <>
      <Vroom/>
  </>
  );
};

export default BookingPopup;
