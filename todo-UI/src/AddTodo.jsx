import React, { useRef, useState } from "react";

function AddTodo({ onHandleItem }) {
  //using Use State Hook to collect values

//   const [item, setItem] = useState();
//   const [dueDate, setDueDate] = useState();

//   function itemChange(event) {
//     // console.log(event)
//     setItem(event.target.value);
//   }
//   function dateChange(event) {
//     // console.log(event)
//     setDueDate(event.target.value);
//   }

  //   using Use Ref Hook to collect valuess

  const itemName = useRef();
  const dueDateS = useRef();

  const passDataInParent = () => {
     const item = itemName.current.value;
     const durDate = dueDateS.current.value;
     itemName.current.value = '';  
     dueDateS.current.value = null;
    onHandleItem(item, durDate);
    
  };
  return (
    <>
      <div className=" py-8 w-auto gap-3 text-white ">
        <input
          // onChange={itemChange}
          // value={item}
          className="h-10 bg-transparent border-2 border-white  w-96 rounded-sm pl-3 outline-none"
          type="text"
          name="text"
          id=""
          ref={itemName}
          placeholder="Type TODO.."
        />
        <input
          // onChange={dateChange}
          // value={dueDate}
          className="h-10 bg-transparent border-2 border-white mx-4 w-36 px-2"
          type="date"
          name="date"
          id=""
          ref={dueDateS}
        />
        <button
          onClick={passDataInParent}
          className="bg-orange-500 h-10 w-20 text-lg font-semibold rounded-sm"
        >
          {" "}
          Submit{" "}
        </button>
      </div>
    </>
  );
}

export default AddTodo;
