import '../styles/about.css'
import { useState } from 'react';
import Founder from '../assets/images/Founder-pic.png'

const About=(()=>{
    const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible((prevVisible) => !prevVisible);
  };
    return(
        
        <>
           <div className="about-section">
                <div className="about-main-img">
                    <img src="" alt="About-main-img"/>

                </div>
                <div className='about-main-con'>
                    <h1 className='about-name'>Meet Smt. Vuppala Rajyalaxmi Sridhar</h1>
                    <h2 className='about-sub-name'>Founder of IVNM</h2>
                    <div className='about-sub-con'>
                        <div className='about-img-con'>
                            <img src={Founder} alt='founderpic'/>
                        </div>
                        <div className='about-content-con'>
                            Smt. Vuppala Rajyalaxmi Sridhar, who is also a member of the Bharatiya Janata Party, established International Vasavi Mahila Samakhya (IVMS) on August 2, 2015, with more than 4,000 young and dynamic women from the Arya Vysya community. Her dedication lies in empowering Arya Vysya community women, and IVMS focuses on disseminating knowledge, encouraging women's participation, and nurturing the next generation of women leaders. IVMS actively engages in various thematic areas, including Women Empowerment, Gender Justice, Good Governance, Women's Rights, Social Inclusion, Culture, Education, and Media. Smt. Vuppala Rajyalaxmi Sridhar's involvement in both IVMS and the Bharatiya Janata Party reflects her commitment to serving and advocating for the rights of women.
                           <h2 id='readmore-button'   onClick={toggleVisibility} className={isVisible ? 'hidden' : 'visible'}
                                >Explore more</h2>
                        </div>
                      
                    </div>
                    <div className={isVisible ? 'visible' : 'hidden'} id='hidden-content'>
                            hiddercontent
                    </div>
                    <h2 className={isVisible ? 'visible' : 'hidden'} onClick={toggleVisibility} id='readmore-button'>Explore less</h2>
                    <div className='content'>
                         <h2 className='content-head'>Who we are</h2>
                         <p className='content-content'>International Vasavi Mahila Samakhya (IVMS) is an organization working for women empowerment in Telangana State with headquarters in Hyderabad. <br/><br/>
                                It believes that real change can only be brought by the political awareness among women.International Vasavi Mahila Samakhya is dedicated to encourage and promote women from Arya Vysyaa community by adopting modern ideas, strategies and creating awareness, knowledge among women in the present competitive eon. Its engages in studies & research on policies, programmes, and advocacy for the rights of Arya Vyya community, especially women.Smt. Vuppala Rajyalaxmi Sridhar Established International Vasavi Mahila Samakhya (IVMS) on August 2, 2015  with more than 4,000 young and dynamic women of the Arya Vysya community. Its dedicated for the empowerment of Arya Vysyacommunity women. IVMS focuses on disseminating knowledge, encouraging women's participation and preparing next generation of women leaders. IVMS has been engaging in different thematic areas such as Women Empowerment, Gender Justice, Good Governance, Women Rights, Social Inclusion, Culture, Education and Media.<br/><br/>
                                To create synergic and conducive environment for efficient and effective women of Arya Vysya community. Help and assist our Arya Vysya women and girls to acquire skills and knowledge about opportunities and higher educational avenues there by take part in competitive examinations of state and national level and succeed to occupy higher positions.The IVMS will strengthen in organizations various countries, states and it will open branches, centers in different parts of the globe. IVMS will a start women co-operative societies, promote educational intuitions, work on health and social welfare units to stretch a helping hand to all those needful women and make them highly cultured, self-dependent and stable.<br/><br/>
                                The IVMS will help economically backward women, people affected by natural disasters, pèople rendered homeless, people with health problems and needy people by developing various funds and benefits.<br/><br/>
                                Correct and guide people affected by problems arising out of urbanization, debts and vocational conflicts by developing an ideally cultural Arya Vysya. Establish Arya Vysyawomen political forum to generate young talent for taking up leadership positions in Gram Panchayats, Municipalities, Legislative Assembly and Lok Sabha.<br/><br/>
                                IMS promotes knowledge, talents, skillsamong women entrepreneurs so that they can participate in the global market and become successful entrepreneurs.</p>
                         <h2 className='content-head'>Vision </h2>
                         <p className='content-content'>To develop more confident entrepreneurs, leaders to be equipped and passionate about leading organizations, businesses, schools, and agencies domestically and internationally who work to contribute to a society where women will be considered asnecessary for comprehensive, sustainable development in the world.</p>
                         <h2 className='content-head'>Mission</h2>
                         <p className='content-content'>To Connect Women and Women Organisations worldwide to leverage their reach and resources to create a global community of economically empowered women</p>
                    </div>
                </div>
           </div>
        </>
    )
})
export default About