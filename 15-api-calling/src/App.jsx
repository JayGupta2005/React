import React from 'react'
import axios from 'axios'
import { useState } from 'react';
const callApi = async()=>{
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  console.log(response);
}

const callApi2 =async ()=>{
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const data = await response.json()
  console.log(data);
}

const axiosApi =async ()=>{
  const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1'); 
  console.log(response.data);
}


const App = () => {
  return (
    <div>
      <button onClick={()=>{
        callApi();
      }} >Click me</button>
      <button onClick={()=>{
        callApi2();
      }} >Click me btn2</button>

      <button onClick={()=>{
        axiosApi();
      }} >Click for Axios</button>
    </div>

  )
}

export default App
