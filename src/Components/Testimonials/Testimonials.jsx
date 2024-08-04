import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonials = () => {

        const slidder =useRef();
        let tx=0;

    const slideforward=()=>{
        if(tx>-50){
            tx-=25;
        }
        slidder.current.style.transform=`translateX(${tx}%)`
    }
       const slidebackward =()=>{
        
        if(tx<0){
            tx+=25;
        }
        slidder.current.style.transform=`translateX(${tx}%)`
    
       }
  return (
    <div className='testimonials'>
        <img src={next_icon} alt="" className='next-btn' onClick={slideforward} />
        <img src={back_icon} alt="" className='back-btn' onClick={slidebackward}/>
        <div className="slidder">
            <ul ref={slidder} >
                <li>
                    <div className="slide">
                        <div className="user-info">
                        <img src={user_1} alt="" />
                        <div>
                            <h3>Ankit Yadav</h3>
                            <span>AIMSR, IND</span>
                        </div>
                    </div>
                    <p>
                    Master’s degree can provide a competitive edge in the job market, opening up more
                     job opportunities and higher-level positions. Many employers require or prefer 
                     candidates with a Master’s degree, especially in fields like higher
                     education administration, public affairs, and social services
                    </p>
                </div>

                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                        <img src={user_2} alt="" />
                        <div>
                            <h3>Ankit Yadav</h3>
                            <span>AIMSR, IND</span>
                        </div>
                    </div>
                    <p>
                    Master’s degree can provide a competitive edge in the job market, opening up more
                     job opportunities and higher-level positions. Many employers require or prefer 
                     candidates with a Master’s degree, especially in fields like higher
                     education administration, public affairs, and social services
                    </p>
                </div>

                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                        <img src={user_3} alt="" />
                        <div>
                            <h3>Ankit Yadav</h3>
                            <span>AIMSR, IND</span>
                        </div>
                    </div>
                    <p>
                    Master’s degree can provide a competitive edge in the job market, opening up more
                     job opportunities and higher-level positions. Many employers require or prefer 
                     candidates with a Master’s degree, especially in fields like higher
                     education administration, public affairs, and social services
                    </p>
                </div>

                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                        <img src={user_4} alt="" />
                        <div>
                            <h3>Ankit Yadav</h3>
                            <span>AIMSR, IND</span>
                        </div>
                    </div>
                    <p>
                    Master’s degree can provide a competitive edge in the job market, opening up more
                     job opportunities and higher-level positions. Many employers require or prefer 
                     candidates with a Master’s degree, especially in fields like higher
                     education administration, public affairs, and social services
                    </p>
                </div>

                </li>
            </ul>
        </div>
    </div>
  )
}

export default Testimonials