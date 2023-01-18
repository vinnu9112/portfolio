import React from 'react'

function Box(props) {
  return (
    <div className='s-box'>
        <div className="s-b-img">
            <img src={props.image} alt={props.alt} />
        </div>
      <div className="s-b-text">
        <h3>{props.title}</h3>
        <p>{props.text}</p>
        <a href={props.link} target='_blank' rel="noreferrer" className='cv-btn'>{props.button}</a>
      </div>
    </div>
  )
}

export default Box
