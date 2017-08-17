import React from 'react'

const DarkHorseComic = (props) => 

<div  className='comic'>
    <a href={`https://www.darkhorse.com`+props.href} target='blank'>
    <img src={props.image.replace('100','300')} alt={props.title}/>
    <p className='comic-title'><strong>{props.title}</strong></p>
  
    </a>
</div>


export default DarkHorseComic