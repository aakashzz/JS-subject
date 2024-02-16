// write a promise fucntion 
function funFetchUserId (userId) {
    return new Promise((resolve, reject) => {
   
        fetch('https://api.github.com/users/aakashzz')
            .then((resolve) => {
                return resolve.json();

            })
            .then(response => {
                resolve(response);
            })
            .catch((error) => {
                reject(error.message);
            })
    })
}
let userId = 123;
funFetchUserId(userId)
    .then((data) => {
        console.log("user id is:- ", data);

    })
    .catch((error) => {
        console.log("error ", error);
    })