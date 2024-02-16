import React from 'react'

function List({todoText,todoDate,onDeleteItem}) {
    function deleteData(){
      
      onDeleteItem(todoText)
    }
  return (
    <div className='flex justify-center items-center '>
          <div className='border-2 border-white mx-6 text-white w-2/4 flex justify-around my-3 items-center'>
               <p className='text-2xl font-semibold h-10 '>{todoText}</p> 
               <p className='text-2xl font-semibold h-10'>{todoDate}</p> 
          </div>
          <button onClick={deleteData} className='bg-red-500 h-11 w-20 rounded-sm font-semibold text-white text-xl'>Delete</button>
    </div>
  )
}

export default List
