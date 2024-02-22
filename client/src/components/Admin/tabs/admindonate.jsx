import React, { useState, useEffect } from 'react';
import './tabs.css';

const Admindonate = () => {
  const [donateData, setDonateData] = useState([]);
  
  //  useEffect(()=>{
     
  //    fetch('https://ivms.onrender.com/getdonatedata')
  //       .then(responce =>{
  //           if(!responce.ok){
  //             throw new Error (`Responce error, ${responce.status}`)
  //           }
  //           return responce.json
  //       })
  //       .then(data=>{
  //             setDonateData(data)
  //       })
  //       .catch(error =>{
  //             console.log('error',error)
  //       })

  //  },[])

   useEffect(() => {
    const apiUrl = 'https://ivms.onrender.com/getdonatedata';

    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
     
        setDonateData(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

return (
  <>
  <div className='main-product-con'>
    {donateData.map(member => (
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

export default Admindonate;
