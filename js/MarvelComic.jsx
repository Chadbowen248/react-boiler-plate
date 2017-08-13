import React from 'react'

const MarvelComic = (props) => 
<div  className='comic'>
    <a href={props.href} target='blank'>
    <img src={props.image} alt={props.title}/>
    <p><strong>{props.title}</strong></p>
  
    </a>
</div>


export default MarvelComic