import React from 'react'

const MarvelComic = (props) => 
<div  className='comic'>
    <a href={props.href} target='blank'>
    <img src={props.image.replace('portrait_incredible','detail')} alt={props.title}/>
    <p className='comic-title'><strong>{props.title}</strong></p>
  
    </a>
</div>


export default MarvelComic