import { useState } from 'react'
import InputContact from './components/InputContact';
import ShowContact from './components/ShowContact';

function App() {
     const arr = []; 
     function parentFunction(name,email) {
          console.log(name);
          console.log(email)
          arr.push(name,email);
          console.log(arr)
     }
     return (
          <div>
               <InputContact getData={parentFunction} />
               <ShowContact />
          </div>
     );
}

export default App
