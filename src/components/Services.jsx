import React from 'react'
import Box from './Box'
import image1 from '../images/p1.png'
import image2 from '../images/p2.png'
import image3 from '../images/p3.png'

function Services() {
  return (
    <div id='services'>
        <div className="s-heading">
            <h1>Projects</h1>
            <p>Here are a few of my hosted projects</p>
        </div>
        <div className="b-container">
            <Box image={image1} text='An static React app which can help you list down your new or incomplete tasks.' link='https://vinnu9112.github.io/text-utils/' alt='image1' button='Visit Site'/>
            <Box image={image2} text='Text Utils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or to removes extra spaces.' link='https://vinnu9112.github.io/to-do-list/' alt='image2' button='Visit Site' />
            <Box image={image3} text='Body Mass Index Calculator can help you learn what this measurement means and how it relates to your health and fitness.' link='https://vinnu9112.github.io/bmi-calculator/' alt='image2' button='Visit Site' />
            {/* <Box image={image3} text='You can see my all projects in the form of repositories on GitHub.' link='https://github.com/vinnu9112' alt='image3' button='All Projects' /> */}
        </div>
    </div>
  )
}

export default Services
