import React from 'react'
import { string } from "prop-types"

const DarkHorseComic = (props) => 

<div  className='comic'>
    <a href={`https://www.darkhorse.com${props.href}`} target='blank'>
    <img src={props.image.replace('100','300')} alt={props.title}/>
    <p className='comic-title'><strong>{props.title}</strong></p>
  
    </a>
</div>

DarkHorseComic.propTypes = {
    href: string.isRequired,
    image: string.isRequired,
    title: string.isRequired
  }
export default DarkHorseComic