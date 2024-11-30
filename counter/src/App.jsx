
import './App.css'
import  { useState } from 'react';



function App() {
 const [count , setState] = useState(0);
  return (

    <>
      <div id='box'>
        
        <div className='ans'>{count}</div>
        <div className='btn'>
        <button className='pls' onClick={()=>{
          setState(count+1)
        }
           }>+</button>

        <button className='rst' onClick={() => {
         setState(0)
        }}>reset</button>
        <button className='ngt'onClick={() => {
          // count--;
          // console.log(count);
          setState(count - 1)
        }}>-</button>
        </div>
      </div>
     
    </>
  )
}



export default App
