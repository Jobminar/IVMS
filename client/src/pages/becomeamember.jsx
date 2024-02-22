import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import '../styles/forms.css'

const Becomeamember = () => {
  // State variable for form inputs
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    houseNo: '',
    roadNo: '',
    streetName: '',
    colony: '',
    city: '',
    state: '',
    pincode: '',
  });

  // Function to handle input changes
  const handleInputChange = (fieldName, value) => {
    setFormData({
      ...formData,
      [fieldName]: value,
    });
  };

  const handleSubmit = async () => {
    try {
      // Make a POST request using fetch
      const response = await fetch('https://ivms.onrender.com/postbecome', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // Check if the request was successful (status code 2xx)
      if (response.ok) {
        console.log('Form data submitted successfully');
        // You can handle success actions here
        alert('form submitted')
      } else {
        // Log an error if the request was not successful
        console.error('Failed to submit form data');
      }
    } catch (error) {
      // Log any network-related errors
      console.error('Network error:', error);
    }
  };

  return (
    <>
    <h1>Become a Member</h1>
      <div className='donatenow-form'>
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          value={formData.name}
          onChange={(e) => handleInputChange('name', e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Phone No"
          type='number'
          variant="outlined"
          value={formData.phone}
          onChange={(e) => handleInputChange('phone', e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          value={formData.email}
          onChange={(e) => handleInputChange('email', e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="House No"
          variant="outlined"
          value={formData.houseNo}
          onChange={(e) => handleInputChange('houseNo', e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Road No"
          variant="outlined"
          value={formData.roadNo}
          onChange={(e) => handleInputChange('roadNo', e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Street Name"
          variant="outlined"
          value={formData.streetName}
          onChange={(e) => handleInputChange('streetName', e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Colony"
          variant="outlined"
          value={formData.colony}
          onChange={(e) => handleInputChange('colony', e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="City"
          variant="outlined"
          value={formData.city}
          onChange={(e) => handleInputChange('city', e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="State"
          variant="outlined"
          value={formData.state}
          onChange={(e) => handleInputChange('state', e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Pincode"
          type='number'
          variant="outlined"
          value={formData.pincode}
          onChange={(e) => handleInputChange('pincode', e.target.value)}
        />
        <div className='submit-button'>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </>
  );
};

export default Becomeamember;
