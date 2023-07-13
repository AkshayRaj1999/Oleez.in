import React from 'react'
import './Plans.css'

function Plans() {
  const pricingData=[{
    title:'Crash Course',
    price:'1000 ₹ / ',
    duration:'6 Months',
    color:'#aaafff',
    feature:[
      'More For Less',
      'Greater Rate of Success',
      'Subject Specific',
      'Materials Oriented'
    ]
  },
  {
    title:'Online Course',
    price:'5000 ₹ / ',
    duration:'1 Year',
    color:'#aaafff',
    feature:[
      'Personalized Education',
      'Enhanced Time Management Skills',
      'Repeated Access to Course Materials',
      'Immediate Feedback'
    ]
  },
  {
    title:'Offline Course',
    price:'10000 ₹ / ',
    duration:'1 Year',
    color:'#aaafff',
    feature:[
      'Enhanced Learning Experience',
      'Better Focus and Concentration',
      'Improved Social Skills',
      'Access to Resources'
    ]
  }
]
  return (
    <div className='container'>
      <div className="priciing-top">
      <h2 className="section_title">Plans Pricing</h2>
      <p>Grab Youre Plans Qucik Asap</p>
      </div>
      <div className="pricing-wrapper">
        {
          pricingData.map((sys,index)=>(
            <div className='pricing-item' key={index}>
            <div className="price-card-top" style={{background:sys.color}}>
              <h2 className='section-title'>{sys.title}</h2>
              <h2 className='pricing-section-title'>{sys.price}<span>{sys.duration}</span></h2>
            </div>
            <div className="service">
              <ul>
                {
                  sys.feature.map((feature,index)=>(
                  <li className='service-li' key={index}>{feature}</li>
                  ))}
              </ul>
            </div>
            </div>
    
          ))
        }

      </div>
    </div>
  )
}

export default Plans