import React from 'react'

function Bharat() {
     let date = new Date;

  
  return (
    <div className='bg-white h-auto w-3/4'>  
          <h1 className='text-4xl font-bold '>Bharat Clock </h1>
          <p className='text-lg py-4'>This is the Clock that shows the time in Bharat at all Times</p>
          <p>This is the current time:- {date.toLocaleString()}</p>
    </div>
  )
}

export default Bharat
