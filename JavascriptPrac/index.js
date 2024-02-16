 // Create OTP genrator (only no. = 1 to 9, digit only 6);
//  1 write Math.random code
//  2 store in array 
//  3 condition is 6 length of aaray and array ful fild to print output


const arrOtp =[];
const genrateOtp  = ()=> Math.floor(Math.random() * 6 );
for (let i = 1; i <= 6 ; i++) {
    const otp = genrateOtp();
    arrOtp.push(otp);
}
console.log(arrOtp);

//Its done 

//Create Catpure genrator (using Only latter only 6 digit);

//same work

let arrCap = '';
for (let i = 1; i <= 6; i++) {
    const capWord = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const genrCap = Math.floor(Math.random() * capWord.length );
    arrCap += capWord.charAt(genrCap);
    
}

console.log(arrCap)

//Done

var prompt = require('prompt');

  //
  // Start the prompt
  //
  prompt.start();

  //
  // Get two properties from the user: username and password
  //
  prompt.get([{
      name: 'username',
      required: true
    }, {
      name: 'password',
      hidden: true,
      conform: function (value) {
        return true;
      }
    }], function (err, result) {
    //
    // Log the results.
    //
    console.log('Command-line input received:');
    console.log('  username: ' + result.username);
    console.log('  password: ' + result.password);
  });

