import React from 'react';
import './Home.css'
import bg1 from '../../../assets/img/kerala.jpg'
import { FcOnlineSupport,FcBusinessman } from "react-icons/fc";
import Course from '../Course/Course';
import Yt from '../Youtube/Yt';
import Plans from '../Plans/Plans';

function Home() {
  return (
    <>
            <section>
            <div className="container">
                <div className="home-container">
                <div className="home-content">
                <h2 className="section_title">
                        Syllabus Oriented Classe's
                    </h2>
                    <p>
                    Subject : ENGLISH, HINDI, MATHS, PHYSICS, CHEMISTRY, BIOLOGY & SOCIAL SCIENCE
                    </p>
                    <div className="home-btns">
                    <a href="https://play.google.com/store/apps/details?id=com.edusap.oleez" target="_blank" rel="noreferrer"><button className='btn-playstore-1'>Download App</button></a>
                     <a href="https://www.youtube.com/@oleezthelearnersapp6445" target="_blank" rel="noreferrer"><button className='btn-playstore-2'>Watch Video</button></a>
                    </div>
                </div>
                <div className="home-image">
                        <div className="box-image">
                            <div className="box-01">
                                <div className="box-img">
                                <img src={bg1}  alt="" />   
                                </div>
                            </div>
                            <div className="whatsapp-div">
                                <h4>24*7 Support</h4>
                                <FcOnlineSupport size='1.6rem ' color='red'/>
                            </div>
                            <div className="parent-div">
                                <h4>Parent Corner</h4>
                                <FcBusinessman size='1.8rem'/>
                            </div>
                        </div>
                </div>
                </div>

            </div>
        </section>
    
    <Course/>
    <Yt/>
    <Plans/>
    </>

  )
}

export default Home