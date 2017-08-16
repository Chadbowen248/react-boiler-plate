import React from 'react'

const ImageComic = (props) => 
<div  className='comic'>
    <a href={props.url} target='blank'>
    <img src={props.image} alt={props.title}/>
    <p className='comic-title'><strong>{props.title}</strong></p>
    <p>{props.date}</p>
  
    </a>
</div>


export default ImageComic