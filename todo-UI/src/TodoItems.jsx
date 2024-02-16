import React from 'react'
import List from './List';
function TodoItems({itemsObj,onDelete}) {
     
  return (
    <div>
    {
          itemsObj.map((item)=>{

              return <List key={item.text} todoText={item.text} todoDate={item.date} onDeleteItem={onDelete} />  
          })
    }
    </div>
  )
}

export default TodoItems
