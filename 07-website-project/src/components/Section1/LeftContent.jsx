import React from 'react'
import {ArrowUpRight} from 'lucide-react'
import 'remixicon/fonts/remixicon.css'
import Herotext from './Herotext'
import Arraw from './Arraw'
const LeftContent = () => {
  return (
    <div className='h-full flex flex-col justify-between w-1/3 '>
      <Herotext/>
      <Arraw/>
    </div>
  )
}

export default LeftContent
