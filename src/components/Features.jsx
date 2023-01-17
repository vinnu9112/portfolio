import React from 'react'
import featureimage from '../images/Frame 19.png'

function Features() {
  return (
    <div id="features">
      <div className='features-model'>
        <img src={featureimage} alt="feature-image" />
      </div>
      <div className="features-text">
        <h1>Features</h1>
        <h3>Here are some features of <span>this</span> software</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae eaque a voluptates ratione temporibus esse inventore, beatae sequi, quia labore ipsum non rem? Optio aperiam quisquam veritatis natus dolorem ipsam!</p>
        <button>See More</button>
      </div>
    </div>
  )
}

export default Features
