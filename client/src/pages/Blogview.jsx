import React from 'react'
import { useLocation } from 'react-router-dom'
import './blogview.css'
import WestIcon from '@mui/icons-material/West';

const Blogpreview = () => {

    const location = useLocation();
    const selectedblogdata = location.state ? location.state.selectedblog : null;
    // const descPoints = selectedblogdata.desc.split('\n');
  return (
   <>
     {/* <Headersub/> */}
     <div className='blogpreview-con'>
        <div className='title-back'>
        <h1>{selectedblogdata.title}</h1>
        {/* <div>{}</div> */}
        </div>
        
         <div className='blogimage'>
             <img src={selectedblogdata.image} alt='blogimage'/>
         </div>
         <div className='desc'>
            <p>{selectedblogdata.description}</p>
        </div>
        
     </div>
   </>
  )
}

export default Blogpreview