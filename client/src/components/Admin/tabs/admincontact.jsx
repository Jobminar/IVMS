import React, { useState, useEffect } from 'react';
import './tabs.css';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { useNavigate } from 'react-router-dom';

const Admincontact = () => {
  const navigate = useNavigate()
  const [contactData,setContactData] = useState([])

  useEffect(()=>{
   fetch('https://ivms.onrender.com/getcontact')
     .then(responce=>{
      if(!responce.ok){
        throw new Error (`Eroor occurd with the status code ${responce.status}`)
      }
      return responce.json()
     })
     .then(data=>{
      console.log(data)
      setContactData(data)
     })
     .catch(error=>{
        console.log(`error occured , ${error}`)
     });


  },[]);

  return (

    <>
        <div className='main-product-con'>
      {contactData.map(member => (
        <div key={member._id} className='product-sub-con'>
            <p>{member.name}</p>
            <p>{member.phone}</p>
            <p>{member.email}</p>
            <p>{member.message}</p>
        </div>
      ))}
    </div>

    </>
  );
};

export default Admincontact;
