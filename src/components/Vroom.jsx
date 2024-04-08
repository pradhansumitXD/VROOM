import React, { useState } from "react";
import "../styles/Vroom.css";

export const Vroom = () => {
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  return (
    <div className="booking-popup">
      <h2>Book Your Car</h2>
      <BookingPopup handleSubmit={handleSubmit} showAlert={showAlert} />
      <CarRegistrationForm />
    </div>
  );
};

const BookingPopup = ({ handleSubmit, showAlert }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group">
        <div className="input-wrapper">
          <label htmlFor="pickup-location">Pickup Location:</label>
          <input type="text" id="pickup-location" required placeholder="Please Enter Location From" />
        </div>
        <div className="datetime-group">
          <div className="datetime-wrapper">
            <label htmlFor="pickup-date">Pickup Date:</label>
            <input type="date" id="pickup-date" required />
          </div>
          <div className="datetime-wrapper">
            <label htmlFor="pickup-time">Pickup Time:</label>
            <input type="time" id="pickup-time" required />
          </div>
        </div>
      </div>

      <div className="input-group">
        <div className="input-wrapper">
          <label htmlFor="dropoff-location">Drop-off Location:</label>
          <input type="text" id="dropoff-location" required placeholder="Please Enter Location To" />
        </div>
        <div className="datetime-group">
          <div className="datetime-wrapper">
            <label htmlFor="dropoff-date">Drop-off Date:</label>
            <input type="date" id="dropoff-date" required />
          </div>
          <div className="datetime-wrapper">
            <label htmlFor="dropoff-time">Drop-off Time:</label>
            <input type="time" id="dropoff-time" required />
          </div>
        </div>
      </div>

      <button type="submit">View Vehicles</button>

      {showAlert && (
        <div className="custom-alert">
          Submitted successfully!
        </div>
      )}
    </form>
  );
};

const CarRegistrationForm = () => {
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    carMake: '',
    carModel: '',
    carYear: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userData);
    setUserData({
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      carMake: '',
      carModel: '',
      carYear: ''
    });
  };

  return (
    
    <div className="car-registration-form">
      <h2>Car Registration Form</h2>
      <form onSubmit={handleSubmit}>

      <label className="name-label">
          First Name:
          </label>

          <input
            type="text"
            name="firstName"
            value={userData.firstName}
            onChange={handleChange}
            required
          />

        <br />
        <label className="name-label">
          Last Name:
          </label>

          <input
            type="text"
            name="lastName"
            value={userData.lastName}
            onChange={handleChange}
            required
          />
      <br />
<         label className="email-label">
          Email:
          </label>

          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            required
          />
        <br />
        <label className="number-label"> 
  Number:
</label>
<input
  type="tel"
  name="phoneNumber"
  value={userData.phoneNumber}
  onChange={handleChange}
  required
/>

        <br />
        
        <h3>Car Details:</h3>

        <label className="car-details-label">Make Year:</label> 
      <input
        type="text"
        name="carMake"
        value={userData.carMake}
        onChange={handleChange}
        required
      />

        <br />
        <label className="car-details-label-Model">Model:</label> 
      <input
        type="text"
        name="carModel"
        value={userData.carModel}
        onChange={handleChange}
        required
      />
        <br />
        <label className="car-details-label-Year">Year:</label> 
      <input
        type="text"
        name="carYear"
        value={userData.carYear}
        onChange={handleChange}
        required
      />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
    
  );
};

