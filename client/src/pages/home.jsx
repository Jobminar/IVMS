import '../styles/home.css'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

// images 
import homemain from '../assets/images/Home-main-img.png'
import donate from '../assets/images/Donate-img.png'
import becomemember from '../assets/images/become-member-img.png'
import achild from '../assets/images/ambitions-child-labour-img.png'
import awomenempowerment from '../assets/images/ambitions-women-unemployeement.png'
import apolitics from '../assets/images/Ambitions-politics-img.png'
import aabortions from '../assets/images/Ambitions-abortions.png'
import serviceChild from '../assets/images/stories-home-child.png'
import serviceWE from '../assets/images/stories-home-womenue.png'
import servicepolitical from '../assets/images/stories-home-political.png'


const Home=(()=>{
    const navigate = useNavigate()
    const [isDonateClicked, setDonateClicked] = useState(false);
    const [isMemberClicked, setMemberClicked] = useState(false);

    const handledonate = () => {
        setDonateClicked(true);
        console.log('handledonete')
        navigate('/donate')
    };  

    const handlemember = () => {
        setMemberClicked(true);
        console.log('handlemember')
        navigate('/becomeamember')
       
    };


    return(
        <>
             <div className="home-section">
                {/* home-img-container */}
                <div>
                    <div className="home-img-con">
                    <img src={homemain} alt="homr-img-con" style={{ filter: `${isDonateClicked || isMemberClicked ? 'none' : 'grayscale(100%)'}` }} />

                    </div>
                    <div className="money-buttons">
                        <div className="donate-button" onClick={handledonate}><img src={donate} alt='donate'  style={{ filter: `${isDonateClicked || isMemberClicked ? 'grayscale(100%)' : 'none'}` }} /></div> 
                        <div className="member-button" onClick={handlemember}><img src={becomemember} alt='become-member' style={{ filter: `${isDonateClicked || isMemberClicked ? 'grayscale(100%)' : 'none'}` }}/></div> 
                    </div>
                    <p className='image-content'>“Lending a hand to her today creates a better world for everyone"</p>
                </div>
                <div className='home-main-info'>
                <h2 className='content-head-h'>International Vasavi Mahila Samakhya</h2>
                <span><p className='content-content-h'>International Vasavi Mahila Samakhya (IVMS) is an organization headquartered in Hyderabad, Telangana, working towards women's empowerment, particularly within the Arya Vysya community. Established on August 2, 2015, with the Founder President's significant experience in community social services, IVMS has since been dedicated to empowering women through education, awareness, leadership development, and various initiatives all aimed at advancing women's rights and fostering economic empowerment.</p><p className='readmore-h'>Readmore</p></span>

                </div>
                <div className='working-towards'>
                        <h2 className='content-head-h-sub'>Working Towards....</h2>
                        <div className='working-links'>
                             <div className='working-sub-links' onClick={()=>{navigate('/childlabour')}}>
                                 <img src={achild} alt='ambitions-home' style={{ filter: `${isDonateClicked || isMemberClicked ? 'none' : 'grayscale(100%)'}` }} />
                             </div>
                             <div className='working-sub-links'  onClick={()=>{navigate('/womenunemployement')}}>
                                 <img src={awomenempowerment} alt='ambitions-home' style={{ filter: `${isDonateClicked || isMemberClicked ? 'none' : 'grayscale(100%)'}` }} />              
                             </div>
                             <div className='working-sub-links'  onClick={()=>{navigate('/politicalservice')}}>
                                  <img src={apolitics} alt='ambitions-home' style={{ filter: `${isDonateClicked || isMemberClicked ? 'none' : 'grayscale(100%)'}` }} />   
                            </div>
                            <div className='working-sub-links'  onClick={()=>{navigate('/abortionsservice')}}>
                                 <img src={aabortions} alt='ambitions-home' style={{ filter: `${isDonateClicked || isMemberClicked ? 'none' : 'grayscale(100%)'}` }} />   
                            </div>
                        </div>
                
                
             </div>
             <div className='stories-section'>
                      <h2 className='content-head-h-sub'>Stories</h2>
                      <div className='main-stories-con'>
                          <div className='sub-con-stories' onClick={()=>{navigate('/childlabour')}}>
                             <img className='sub-con-stories-img' src={serviceChild} alt='sub-con-stories-img' style={{ filter: `${isDonateClicked || isMemberClicked ? 'none' : 'grayscale(100%)'}` }} />
                            <div className='sub-con-stories-content' >
                                 <h2>Child Labour and Their Challenges</h2>
                            </div>
                          </div>
                          
                          <div className='sub-con-stories'  onClick={()=>{navigate('/womenunemployement')}}>
                             <img className='sub-con-stories-img' src={serviceWE} alt='sub-con-stories-img' style={{ filter: `${isDonateClicked || isMemberClicked ? 'none' : 'grayscale(100%)'}` }} />
                             <div className='sub-con-stories-content'>
                                 <h2>Women and Unemployment</h2>
                            </div>
                          </div>
                          
                          <div className='sub-con-stories' onClick={()=>{navigate('/politicalservice')}}>
                                <img className='sub-con-stories-img' src={servicepolitical} alt='sub-con-stories-img' style={{ filter: `${isDonateClicked || isMemberClicked ? 'none' : 'grayscale(100%)'}` }} />
                                <div className='sub-con-stories-content'>
                                 <h2>Women in Political Participation</h2>
                                </div>
                          </div>
                      </div>
                      <h2 className='morestories'>More stories</h2>
             </div>
             </div>
        </>
    )
})
export default Home