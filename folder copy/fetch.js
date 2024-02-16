// const fetchDocu = new Promise(function (resolve,reject){
//     setTimeout(()=>{
//         console.log("hello Buddy i will check this code are correct and not..!");
//             resolve();
//         },2000);

//     })
    

//     .then(function (){
//         console.log("prefect");
//     })

fetch('https://api.github.com/users/aakashzz')
.then((response)=>{
    // return response.json()
    return response.status()
}).then((data)=>{
    console.log(data);
})
.catch((eror)=>{
        console.log("error detcted !");
})