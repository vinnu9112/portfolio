import React from 'react'
import featureimage from '../images/Frame 19.png'
import pdf from '../images/resume.pdf'

function Features() {
  return (
    <div id="features">
      <div className='features-model'>
        <img src={featureimage} alt="feature-image" />
      </div>
      <div className="features-text">
        <h1>About Me</h1>
        <h3>Introduction</h3>
        <p>I have completed my Bachelor of Engineer in Electrical Engineering from Marathwada Mitra Mandal's College of Engineering, Pune. My aggregate CGPA was 9.12. I am skilled in C/C++ at an intermediate level and also familiar to the technologies like NodeJS and ReactJs.</p>
        <div className="header-btns">
        <a download href={pdf} className='cv-btn2'>
        <button> Download CV </button>
        </a>
        </div>
      </div>
    </div>
  )
}

export default Features
