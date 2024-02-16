import React, { useState } from 'react'
// import fetchData from './fetchData'
function Input() {
     const [values, setValues] = useState('');
     const [result,setResult] = useState();
     function Convertor(){
          setResult(values * 83);
     
     }
     return (
          <div className='h-screen bg-slate-900 text-black flex justify-center items-center '>
               <div className=' h-80 w-3/4 py-5 bg-blue-600 px-10'>
                    <input className='h-10 w-full outline-none px-3 ' type="number" value={values} onChange={(e)=>setValues(e.target.value)} />
                    <div className='text-center py-10'>
                         <select name="select" id="" className='mx-5'>
                              <option value="">USD</option>
                              <option value="">INR</option>
                              <option value="">PUD</option>
                         </select>

                         <button onClick={Convertor} className='bg-red-400 h-8 w-20 rounded-sm font-semibold '>Convert</button>

                         <select name="" id="" className='mx-5'>
                              <option value="">INR</option>
                         </select>
                    </div>
                    <input className='h-10 w-full outline-none px-3  bg-blue-200' type="number" disabled value={result} onChange={(e)=>e.target.value} />

               </div>
          </div>
     )
}

export default Input
