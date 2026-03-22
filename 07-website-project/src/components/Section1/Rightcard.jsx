import React from 'react'
import RightCardContent from './RightCardContent'

const Rightcard = (props) => {
  return (
    <div className='h-full w-65 relative shrink-0  rounded-4xl overflow-hidden'>
      <img className='h-full w-full object-cover' src={props.img} alt="img" />
      <RightCardContent id={props.id} tag={props.tag}/>
    </div>
  )
}

export default Rightcard
