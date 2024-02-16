const data = [
	{
		"account-holder": "Nasim Preston",
		"balance": 7278.10,
		"credit-card-number": "548 45881 13341 646",
		"city": "St. Pölten"
	},
	{
		"account-holder": "Sebastian Santiago",
		"balance" : 5991.46,
		"credit-card-number": "2014 388649 58664",
		"city": "Gloucester"
	},
	{
		"account-holder": "Hayes Solis",
		"balance" : 2103.04,
		"credit-card-number": "513 98285 43648 346",
		"city": "Nagaon"
	},
	{
		"account-holder": "Eric James",
		"balance" : 7515.88,
		"credit-card-number": "304522134563952",
		"city": "Western Water Catchment"
	},
	{
		"account-holder": "Reuben Barr",
		"balance" : 8408.24,
		"credit-card-number": "3433 365216 84658",
		"city": "Landeck"
	}
];

let currency = data;
const collector = Object.values(currency); 

const collect = [];
	currency.forEach((item)=>{
			collect.push(item["city"]);
	})
	// console.log( typeof collect);
	// console.table(Object.values(collect));

// const filter = collect.filter(bala=>{
// 		return bala["balance "] >= 3000.00;
// })

// console.log(filter);
// function FindArray(collects,values){
// 	return Object.keys(collects).find(key=>collects[key] === values);	
// }
// let array = FindArray(collect,"Landeck")
// console.log(array);
// array.form
// if(  collect === array){
// 	console.log("yes");
// }
// else{
// 	console.log('no');
// }

for(const coll of currency){
	// console.log(coll)
	if (coll.balance < 3000.00) {
		console.log(`${coll["account-holder"]},${coll['balance']},${coll["credit-card-number"]},${coll.city}`);
	}
	else{
		console.log("noo")
	}
}
// for (const key in currency) {
// 	console.log(currency[key]);
// }