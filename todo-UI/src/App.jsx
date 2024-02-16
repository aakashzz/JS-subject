import React, { useState, useEffect } from "react";
// import Bharat from './Bharat';
import TodoItems from "./TodoItems";
import AddTodo from "./AddTodo";
import WelcomeMessage from "./WelcomeMessage";

function App() {
     const [itemsObj,setItemsObj] = useState( [])
     function handleItem(itemName,itemDueDate){
          // console.log(`Print Items:- ${itemName} Date:- ${itemDueDate}`)
          const newTodoItemsAdd = [...itemsObj,{text: itemName , date: itemDueDate}];
          setItemsObj(newTodoItemsAdd)
     }

      function deleteItems(itemsName){
          // console.log(itemsName);    
          const filtring = itemsObj.filter((item )=>{
              return item.text !== itemsName
          })
          setItemsObj(filtring)
      }
  return (
    <div className="h-screen bg-slate-900">
      <center>
        <h1 className="text-4xl font-bold pt-5 text-white">TODO App</h1>
        <AddTodo onHandleItem={handleItem}/>
        {itemsObj.length === 0 ? <WelcomeMessage /> : ''}
        <TodoItems itemsObj={itemsObj } onDelete={deleteItems} />
      </center>
    </div>
  );
}

export default App;
