import React from 'react'
import Rightcard from './Rightcard'

const RightContent = (props) => {
  return (
    <div id='right' className='h-full w-2/3 flex overflow-x-auto rounded-4xl flex-nowrap gap-10 p-6'>
      {props.users.map(function(elem,idx){
        return <Rightcard key={idx} id={idx} img={elem.img} tag={elem.tag} />
      })}
    </div>
  )
}

export default RightContent
