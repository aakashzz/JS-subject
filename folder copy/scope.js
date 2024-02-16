

function promis() {
    return new Promise((resolve,reject)=>{    
        const allInsert = `inputChecker`;
            if(allInsert !== false ){
                resolve(console.log("data input are picefully success"));
            }else{
                reject(console.error("maybe recheck your detiasls"));
            }
        })}
    

 promis().then((value)=>{
    return value
 }).catch((err)=>{
    return err
 })