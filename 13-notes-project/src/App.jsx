import React, { useState } from 'react'

const App = () => {
  const [title,setTilte] = useState('');
  const [details, setDetails] = useState('');
  const [task, setTask] = useState([]);
  const submitForm = (e)=>{
    e.preventDefault();
    const copyTask = [...task];
    copyTask.push({title, details})
    setTask(copyTask)
    // console.log(copyTask)

    setTilte('');
    setDetails('');
  }
  
  const deleteNote = (idx)=>{
    const copyTask = [...task]
    copyTask.splice(idx,1);
    setTask(copyTask)
  }

  return (
    <div className='bg-black h-screen'>
        <div className='flex'>
            <div className="h-screen w-1/2">
              <form onSubmit={(e)=>{
                submitForm(e);
              }}>
                <h1 className='text-white text-4xl ml-20 mt-7 font-bold'>Add Notes</h1>
                <input required type="text" placeholder='Enter notes Heading' className='border-2 px-5 py-3 text-white ml-18 mt-8 rounded-4xl w-3/4'  value={title} onChange={(e)=>{
                  setTilte(e.target.value);
                }} />
                <textarea required type="text" placeholder='Write Details' className='border-2 px-5 py-3 text-white ml-18 mt-8 rounded-2xl w-3/4 h-1/3' value={details} onChange={(e)=>{
                  setDetails(e.target.value);
                }}/>
                <button className='bg-white text-black block px-5 py-3 ml-18 mt-6 rounded-1xl w-3/4 active:scale-95'>Add Note</button>
              </form>
            </div>
        <div className="bg-gray-900 h-screen w-1/2 overflow-auto">
          <h1 className='text-white text-4xl font-bold mt-8 ml-10'>Recent Notes</h1>
          <div className='flex flex-wrap '>
            {task.map(function(elem,idx){
              return <div  key={idx} className=' text-black bg-cover flex flex-col  card w-40 h-60 bg-[url(https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png)] mt-8 ml-10 rounded-2xl'>
                <h3 className='leading-tight font-bold p-3 pt-4'>{elem.title}</h3> <hr />
                <p className=' mt-0.5 px-3 leading-tight text-gray-600'>{elem.details}</p>
                <button className='mt-auto rounded-4xl bg-red-500 font-bold text-gray-800 p-1  active:scale-95 w-full ml-0.5 mr-0.5' onClick={(idx)=>{
                  deleteNote(idx);
                }} >Delete</button>
              </div>
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
