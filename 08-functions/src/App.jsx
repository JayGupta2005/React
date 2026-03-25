const App = () => {
  function btnClick(){
    console.log("btn was clicked")
  }
  // function inputChange(){
  //   console.log("User is typing");
  // }
  function inputChange(val){
    console.log(val);
  }
  return (
    <div>
      <button onClick={btnClick} >Click Here</button>
      <p className="bg-red-600 cursor-pointer w-fit" onClick={function(){
        console.log("Hello Guys")
      }}  >Heloo</p>
      <input className="mt-5 border-2 rounded-4xl p-2" type="text" placeholder="Enter Full name" onChange={inputChange} />
      <input type="text" placeholder="Write Anything" 
      onChange={function(elem){
        // console.log(elem);
        // console.log(elem.target.value)
        inputChange(elem.target.value)
      }} />

      <br /> <br /><br /><br /><hr />
      <div className="bg-red-400 h-150 w-100 mb-10 " 
        onMouseMove={(elem)=>{
          console.log(elem.clientX);
          // console.log(elem.clientY);
          // console.log(elem.pageX);
          // console.log(elem.pageY);
        }}>

      </div>
    </div>
  )
}

export default App
