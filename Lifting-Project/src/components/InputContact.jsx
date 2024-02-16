import React,{useState} from 'react'

function InputContact({getData}) {
     const [name, setName] = useState("");
     const [email, setEmail] = useState("");
     // console.log(name);
     function handlerSubmit(e) {
          e.preventDefault;
          getData(name, email);
     }
     return (
          <div>
               <div>
                    <h1>Contact Manager</h1>
               </div>

               <form onSubmit={handlerSubmit}>
                    <label htmlFor="">Contact Name:- </label>
                    <input
                         type="text"
                         name=""
                         id="name"
                         value={name}
                         onChange={(e) => setName(e.target.value)}
                    />
                    <br />
                    <br />
                    <label htmlFor="">Email:- </label>
                    <input
                         type="text"
                         name=""
                         id="email"
                         value={email}
                         onChange={(e) => setEmail(e.target.value)}
                    />

                    <button>Submit</button>
               </form>
          </div>
     );
}

export default InputContact
