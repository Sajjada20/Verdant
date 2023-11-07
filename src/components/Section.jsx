import React from 'react'
import './stylesComp/Section.css'


function Section(props) {
    const {number, text, color} = props.data
    const id = (props.idx + 1)
  return (
    <div className='section-div-section'>
        <h4 style={{color: color}}>{id}</h4>
        <div className='section-info-div'>
            <h1 style={{color: color}}>{number}</h1>
            <hr />
            <p>{text}</p>
        </div>
    </div>
  )
}

export default Section