import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1content = (props) => {
  return (
    <div className='py-8 px-9 pb-15 flex items-center gap-10 h-[90vh]'>
      <LeftContent />
      <RightContent users={props.users}/>
    </div>
  )
}

export default Page1content
