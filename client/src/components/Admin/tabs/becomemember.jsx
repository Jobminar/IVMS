import React, { useState, useEffect } from 'react';
import './tabs.css';


const Adminbecomemember = () => {
  const [Becomedata, setBecomeData] = useState([]);

  useEffect(() => {
    const apiUrl = 'https://ivms.onrender.com/getbecome';

    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
     
        setBecomeData(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);


  return (
   
    <>
    <div className='main-product-con'>
      {Becomedata.map(member => (
        <div key={member._id} className='product-sub-con'>
         
            <p>{member.name}</p>
            <p>{member.phone}</p>
            <p>{member.email}</p>
            <p>{member.houseNo}</p>
            <p>{member.roadNo}</p>
            <p>{member.streetName}</p>
            <p>{member.colony}</p>
            <p>{member.city}</p>
            <p>{member.state}</p>
            <p>{member.pincode}</p>
          
        </div>
      ))}
    </div>
    </>
  );
};

export default Adminbecomemember;
