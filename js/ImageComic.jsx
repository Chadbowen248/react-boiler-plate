import React from 'react'
import { string } from "prop-types"

const ImageComic = (props) => 
<div  className='comic'>
    <a href={`https://imagecomics.com${props.href}`} target='blank'>
    <img src={props.image} alt={props.title}/>
    <p className='comic-title'><strong>{props.title}</strong></p>
    <p>{props.date}</p>
  
    </a>
</div>


ImageComic.propTypes = {
    href: string.isRequired,
    image: string.isRequired,
    title: string.isRequired,
    date: string.isRequired,
  }

export default ImageComic