import React from 'react'
import featureimage from '../images/pp.JPG'
import pdf from '../images/resume.pdf'

function Features() {
  return (
    <div id="features">
      <div className='features-model'>
        <img src={featureimage} alt='featureimg' />
      </div>
      <div className="features-text">
        <h1>About Me</h1>
        <h3>Introduction</h3>
        <p>I earned my Bachelor of Engineering degree in Electrical Engineering from Marathwada Mitra Mandal's College of Engineering in Pune. My overall grade point average was 9.02. I possess intermediate level proficiency in C/C++ and am also familiar with technologies like NodeJS and ReactJS.</p>
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
