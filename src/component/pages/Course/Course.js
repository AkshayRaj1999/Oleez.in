import React from 'react'
import './Course.css'
import line from '../../../assets/img/line.png';
import online from '../../../assets/img/online.png'
import offline from '../../../assets/img/offline.png'
function Course() {
    const ArrayData=[{
        title:"Crash Course",
        description:"More Effective In Less Time Period",
        image:line

    },
    {
        title:"Online Tutuion",
        description:"Recorded And Live Classes",
        image:online

    },
    {
        title:"Offline Tutuion",
        description:"Offline Classes Available Near Youre City",
        image:offline

    }];
  return (
    <div className='container'>
        <div className="course-top">
        <h2 className="section_title">
        Our Courses
        </h2>
        <p>
            Free classes provided to all English/Malayalam Kerala Syllabus students that contain recorded, live classes.
        </p>
        <div className="course-wrapper">
            {
                ArrayData.map((sys,index)=>(
                    <div className="course-item" key={index}>
                    <span className="course-icon">
                        <img src={sys.image} alt="" />
                    </span>
                    <div className='course-content'>
                        <h4>{sys.title}</h4>
                        <p>{sys.description}</p>
                    </div>
                </div>
    
                ))
            }
        </div>
        </div>
    </div>
  )
}

export default Course