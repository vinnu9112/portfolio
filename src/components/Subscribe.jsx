import React from 'react'
import img1 from '../images/insta.png'
import img2 from '../images/gmail.png'
import img3 from '../images/twitter.png'

function Subscribe() {
  return (
    <div id='subscribe'>
      <h3>Contact Me</h3>
      <div className="subscribe-img">
        <a href="https://www.instagram.com/vinayak.9112/?hl=en" target='_blank' rel='noreferrer'>
        <img className='img1' src={img1} alt="img1" />
        </a>
        <a href="mailto:vinayaknandikole2158gmail.com" target="_blank" rel='noreferrer'>
        <img className='img2' src={img2} alt="img2" />
        </a>
        <a href="https://mobile.twitter.com/vinayak_9112" target="_blank" rel='noreferrer'>
        <img className='img3' src={img3} alt="img3" />
        </a>
      </div>
      
    </div>
  )
}

export default Subscribe
