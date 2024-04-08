import React, { useState } from 'react';

function RegistrationForm() {
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
    setUserData(prevState => ({
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
    <div>
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input 
            type="text" 
            name="firstName" 
            value={userData.firstName} 
            onChange={handleChange} 
            required 
          />
        </label>
        <br />
        <label>
          Last Name:
          <input 
            type="text" 
            name="lastName" 
            value={userData.lastName} 
            onChange={handleChange} 
            required 
          />
        </label>
        <br />
        <label>
          Email:
          <input 
            type="email" 
            name="email" 
            value={userData.email} 
            onChange={handleChange} 
            required 
          />
        </label>
        <br />
        <label>
          Phone Number:
          <input 
            type="tel" 
            name="phoneNumber" 
            value={userData.phoneNumber} 
            onChange={handleChange} 
            required 
          />
        </label>
        <br />
        <h3>Car Details:</h3>
        <label>
          Make:
          <input 
            type="text" 
            name="carMake" 
            value={userData.carMake} 
            onChange={handleChange} 
            required 
          />
        </label>
        <br />
        <label>
          Model:
          <input 
            type="text" 
            name="carModel" 
            value={userData.carModel} 
            onChange={handleChange} 
            required 
          />
        </label>
        <br />
        <label>
          Year:
          <input 
            type="text" 
            name="carYear" 
            value={userData.carYear} 
            onChange={handleChange} 
            required 
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

