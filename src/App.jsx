import { useState } from 'react'
import './App.css'

function App() {
  const [color, setcolor] = useState("olive")

  return (
    <div className='w-full h-screen duuration-200'
     style={{ backgroundColor: color }} 
    >
      <div className='flex flex-wrap fixed justify-center bottom-12 inset-x-0 px-2 '> 
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
             <button onClick={()=>{
              setcolor("red")
             }} className='outline-none px-4 py-1 rounded-full text-white'
             style={{backgroundColor: "red"}}
             >red </button>
             <button className='outline-none px-4 rounded-full'
             style={{backgroundColor: "blue"}}
             >blue </button>
             <button className='outline-none px-4 rounded-full'
             style={{backgroundColor: "yellow"}}
             >yellow </button>
             <button className='outline-none px-4 rounded-full'
             style={{backgroundColor: "pink"}}
             >pink </button>
        </div>
      </div>
     
    
    </div>
  )
}

export default App
