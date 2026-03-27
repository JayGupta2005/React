import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react';
const App = () => {
  const [num, setNum] = useState(0);
  const [num2, setNum2] = useState(100);

  useEffect(function(){
    console.log("Use effect is Running")  
  },[num])//dependency

  return (
    <div>
      <h2>Num = {num} </h2>
      <h2>Num2 = {num2} </h2>
      <button onMouseEnter={()=>{
        setNum(num+1);
      }} onMouseLeave={()=>{
        setNum2(num2+10)
      }} >Click me</button>
    </div>
  )
}

export default App
