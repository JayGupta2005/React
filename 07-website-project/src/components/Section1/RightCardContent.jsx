import React from 'react'

const RightCardContent = (props) => {
  return (
    <div>
      <div className='absolute top-0 left-0 h-full w-full p-7 flex flex-col justify-between'>
        <h2 className='bg-white text-2xl font-semibold text-black rounded-full h-12 w-12 flex justify-center items-center'>{props.id +1}</h2>
        <div>
            <p className='text-lg leading-normal text-white mb-10 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, provident.</p>
            <div className='flex justify-between'>
                <button className='bg-blue-600 text-white font-medium px-5 py-2 rounded-full '>{props.tag}</button>
                <button className='bg-blue-600 text-white font-semibold px-3 py-2 rounded-full '><i class="ri-arrow-right-line"></i></button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default RightCardContent
