import React, { useState } from 'react'

const App = () => {
  const [A, setA] = useState({user: "Jay", age: 20});
  const clickBtn = ()=>{
    const newA = {...A};
    newA.user = "Ankit";
    newA.age = 23;
    setA (newA);
  }
  return (
    <div>
      <h2>{A.user}, {A.age}</h2>
      <button onClick={clickBtn} >Click me to change</button>
    </div>
  )
}

export default App
