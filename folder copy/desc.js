// code 
const fetching = 'https://randomuser.me/api/';
// console.log(fetching);
fetch(fetching)
.then((response)=> response.json())
.then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error)
})