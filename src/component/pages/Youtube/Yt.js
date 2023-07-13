import React from 'react'
import  './Youtube.css'
import ReactPlayer from 'react-player/youtube'

function Yt() {
  return (
    <div className='container'>
        <div className="yt-header">
        <h2>Our Popular Videos</h2>
        </div>
        <div className="yt-container">
      <div className='player-wrapper'>
        <ReactPlayer
          className='react-player01'
          url='https://youtu.be/9IifD6m5-FQ'
          width='500px'
          height='250px'
          controls={true}
        />
      </div>
      <div className='player-wrapper'>
        <ReactPlayer
          className='react-player02'
          url='https://youtu.be/3PGslAyGq-U'
          width='450px'
          height='250px'
          controls={true}
        />
      </div>
      </div>
      </div>
  )
}

export default Yt