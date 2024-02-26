import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import '../styles/forms.css'
import homemain from '../assets/images/Home-main-img.png'
import { InputLabel, OutlinedInput, FormControl } from '@mui/material';

const Donatenow = () => {
  // State variable for form inputs
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    gowthram: '',
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
      const response = await fetch('https://ivms.onrender.com/postdonate', {
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
    {/* <h1>Become a Member</h1> */}
      <div className='member-mmain-img'>
           <img src={homemain} alt='main-image' style={{filter: 'grayscale(0%)'}}/>
      </div>
      <div className='member-text'>
          <p>Inspired by the narration of experiences of war of Solferino by Henry Dunant, the Red Cross Organisation was formed in the year 1864. The first "Geneva Convention" has adopted Red Cross and its emblem for the ameloration of conditions of wounded in the battle field. The nucleus of Indian Red Cross Society which is a part of international movement was formed in the year 1920, through an act of Parliament(Act XV of 1920). The Hon'ble Governer of Telangana is its President.<br/>

            Red Cross provides assistance to victims of war, Natural Calamities, Disaster, Epidemics without discrimination of race, religion, creed, nationality, political opinions. In addition to it relief activities in emergencies, it promotes and undertakes activities of development and prevention of ill health. disease and preparedness for disasters.<br/>

            Any person can help this international humanitarian effort by donation in cash or kind, and by enrolling as a member and serving voluntarily in any of its activities.</p>
      </div>
      {/* form */}
      <div className='donatenow-form'>
        <h1>Personal Details</h1>
      <div className='personal-details'>
        <div className='input-sub'>
          <InputLabel htmlFor="outlined-basic">Full Name</InputLabel>
          <TextField
            id="outlined-basic"
            // label="Name"
            variant="outlined"
            value={formData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
          />
        </div>
        
        <div className='input-sub'>
        <InputLabel htmlFor="phone">Phone No</InputLabel>
        <TextField
          id="phone"
          // label="Phone No"
          variant="outlined"
          value={formData.phone}
          onChange={(e) => handleInputChange('phone', e.target.value)}
        />
      </div>

      <div className='input-sub'>
        <InputLabel htmlFor="email">Email</InputLabel>
        <TextField
          id="email"
          // label="Email"
          variant="outlined"
          value={formData.email}
          onChange={(e) => handleInputChange('email', e.target.value)}
        />
      </div>

      <div className='input-sub'>
        <InputLabel htmlFor="gowthram">Gowthram</InputLabel>
        <TextField
          id="gowthram"
          // label="Gowthram"
          variant="outlined"
          value={formData.gowthram}
          onChange={(e) => handleInputChange('gowthram', e.target.value)}
        />
      </div>
    </div>
    <h1>Address information</h1>
    <div className='address-details'>
        <div className='input-sub'>
          <InputLabel htmlFor="houseNo">House No</InputLabel>
            <TextField
              id="outlined-basic"
              // label="House No"
              variant="outlined"
              value={formData.houseNo}
              onChange={(e) => handleInputChange('houseNo', e.target.value)}
            />
          </div>

          <div className='input-sub'>
          <InputLabel htmlFor="roadNo">Road No</InputLabel>
            <TextField
              id="outlined-basic"
              // label="Road No"
              variant="outlined"
              value={formData.roadNo}
              onChange={(e) => handleInputChange('roadNo', e.target.value)}
            />
          </div>

          <div className='input-sub'>
          <InputLabel htmlFor="streetName">Street Name</InputLabel>
            <TextField
              id="outlined-basic"
              // label="Street Name"
              variant="outlined"
              value={formData.streetName}
              onChange={(e) => handleInputChange('streetName', e.target.value)}
            />
          </div>

          <div className='input-sub'>
          <InputLabel htmlFor="colony">Colony</InputLabel>
            <TextField
              id="outlined-basic"
              // label="Colony"
              variant="outlined"
              value={formData.colony}
              onChange={(e) => handleInputChange('colony', e.target.value)}
            />
          </div>

          <div className='input-sub'>
          <InputLabel htmlFor="city">City</InputLabel>
            <TextField
              id="outlined-basic"
              // label="City"
              variant="outlined"
              value={formData.city}
              onChange={(e) => handleInputChange('city', e.target.value)}
            />
          </div>

          <div className='input-sub'>
          <InputLabel htmlFor="state">State</InputLabel>
            <TextField
              id="outlined-basic"
              // label="State"
              variant="outlined"
              value={formData.state}
              onChange={(e) => handleInputChange('state', e.target.value)}
            />
          </div>

          <div className='input-sub'>
          <InputLabel htmlFor="pincode">Pin code</InputLabel>
            <TextField
              id="outlined-basic"
              // label="Pincode"
              // type='number'
              variant="outlined"
              value={formData.pincode}
              onChange={(e) => handleInputChange('pincode', e.target.value)}
            />
          </div>
      </div>
        <div className='submit-button'>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </>
  );
};

export default Donatenow;
