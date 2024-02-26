import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './contact.css';
import { json } from 'react-router-dom';
import { InputLabel, OutlinedInput, FormControl } from '@mui/material';

const Contact = () => {
  // State variable for form inputs
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  // Function to handle input changes
  const handleInputChange = (fieldName, value) => {
    setFormData({
      ...formData,
      [fieldName]: value,
    });
  };

  // Function to handle form submission
  const handleSubmit = async() => {
   try{
     const responce = await fetch('https://ivms.onrender.com/postcontact',{
         method:'POST',
         headers:{
          'Content-Type' : 'application/json'
         },
         body: JSON.stringify(formData),
     });
     if(responce.ok){
          console.log('form submitted')
          alert('form added')
          setFormData({
            name: '',
            phone: '',
            email: '',
            message: '',

          })
     }
     else{
        console.log('error adding from data')
     }
   }catch(error){
    console.log('network error' , error)
   }
    
  
  };

  return (
    <>
      <h1>Contact us Form</h1>
      <div className='contact-con'>
      <div className='contact-details'>
      <div className='input-sub'>
        <InputLabel htmlFor="name">Name</InputLabel>
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
          id="outlined-basic"
          // label="Phone No"
          variant="outlined"
          value={formData.phone}
          onChange={(e) => handleInputChange('phone', e.target.value)}
        />
      </div>

      <div className='input-sub'>
        <InputLabel htmlFor="email">Email</InputLabel>
        <TextField
          id="outlined-basic"
          // label="Email"
          variant="outlined"
          value={formData.email}
          onChange={(e) => handleInputChange('email', e.target.value)}
        />
      </div>

      <div className='input-sub'>
        <InputLabel htmlFor="message">Message</InputLabel>
        <TextField
          id="outlined-basic"
          // label="Message"
          variant="outlined"
          value={formData.message}
          onChange={(e) => handleInputChange('message', e.target.value)}
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

export default Contact;
