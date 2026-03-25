import { useState } from "react"

const App = () => {
  // let a = 20;
  // function changeA(){
  //   console.log(a);
  //   a++;
  //   console.log(a);
  // }
  // const [A, setA] = useState(20);
  // let x = A;
  // function changeA(){
  //   x++
  //   setA(x);
  // }
  const [A, setA] = useState(0);
  let x = A;
  function increase(){
    x = x+1
    setA(x)
  }
  function decrease(){
    x = x-1;
    setA(x)
  }
  function jump(){
    x = x+5;
    setA(x);
  }
  const [nam , changeNam] = useState("Jay");
  function changeName(){
    changeNam ("Rahul");
    // changeNam ("Jay");
  }
  return (
    <div>
      <h1>Count is {A}</h1>
      <button onClick={()=>{
        increase();
      }}>Increase</button>
      <button onClick={()=>{
        decrease();
      }}>Decrease </button>
      <button onClick={jump}>Jump by 5</button>
      <hr />
      <h3>Change Name to {nam}</h3>
      <button onClick={changeName}>Click to chnage name </button>
    </div>
  )
}

export default App
