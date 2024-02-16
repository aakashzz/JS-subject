import React, { useState,useEffect } from 'react'

function Funda() {
    const  [name,setName] = useState("Aakash Malviya");
    useEffect(()=>{
        console.log("Mounted")
        return console.log("UNMounted")
    },[])
    useEffect(()=>{
      alert(name)
    },[name])
  return (
    <div>
    <h1 className='text-4xl text-center font-bold' >Hello budy</h1>
        <button onClick={()=> setName("Hitesh Chodhry")} className='bg-slate-400 p-1 rounded-lg '> Change Name</button>
        <h2 className='text-4xl text-center font-bold' >{name}</h2>
    </div>
  )
}

export default Funda
