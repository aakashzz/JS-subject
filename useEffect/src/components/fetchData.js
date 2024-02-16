// import React,{useState} from 'react';
function fetchData(currency){
     // const [data,setData]  = useState({});
     fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
     .then((res)=>res.json())
     .then((res)=>{
          // setData(res[currency]);
          // console.log(data)
          // console.log(res[currency])
          console.log(res[currency])
        return res;
     });
}
 fetchData('inr')
// export default fetchData;