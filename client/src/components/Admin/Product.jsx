import React, { useState } from 'react';
import './Product.css'
import Becomeamember from '../../pages/becomeamember';
import Admindonate from './tabs/admindonate';
import Admincontact from './tabs/admincontact';
import Adminbecomemember from './tabs/becomemember';





const Vasavi = () => {
  const [activeTab, setActiveTab] = useState('adminbecomemember');

  const renderSelectedComponent = () => {
    switch (activeTab) {
      case 'adminbecomemember':
        return <Adminbecomemember/>
      case 'donate':
        return <Admindonate />;
      case 'admincontact':
        return <Admincontact />;
    
      default:
        return null;
    }
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div  className='services-container'>
  
      <div className="tabs-container">
        <div
          className={`tab ${activeTab === 'adminbecomemember' && 'active'}`}
          onClick={() => handleTabClick('adminbecomemember')}
        >
          {/* <img src={general} alt="" width={30}/> */}
         Become Memnber
        </div>
        <div
          className={`tab ${activeTab === 'donate' && 'active'}`}
          onClick={() => handleTabClick('donate')}
        >
          {/* <img src={denting} alt="" width={30}/> */}
         Donate
        </div>
        <div
          className={`tab ${activeTab === 'admincontact' && 'active'}`}
          onClick={() => handleTabClick('admincontact')}
        >
          {/* <img src={denting} alt="" width={30}/> */}
         Contact Members
        </div>
       
      </div>
      {renderSelectedComponent()}
    </div>
  );
};

export default Vasavi;
