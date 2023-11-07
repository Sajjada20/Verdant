import React from 'react'
import './stylesComp/EachProduct.css'



function EachProduct(props) {
    const {name, image, fact, color} = props.data;

  return (
    <div className='each-p-div' style={{backgroundColor: color}} key={props.idx}>
        <img src={image} alt="" id='each-p-image' />
        <h1>{name}</h1>
        <p>{fact}</p>
    </div>
  )
}

export default EachProduct