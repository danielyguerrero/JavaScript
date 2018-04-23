var start = 1;   // starting out the first day
var total = 0;  // total amount of money earned
var days = 30; // total amount of days 

//seeting var x to loop to 30 days 
for (var x = 1; x <= days; x ++){ 
//add to the amount each day
	total = total + start;
// mulitplying each day by 2
	start = start * 2;
}
// print the total amount with our 0.01 begining amount
console.log("Reward after 30 days: $" + total * 0.01)


// Next Challenge: How many days would it take to earn the given amount of currency
function AmountOfDays(currency){
//return null if the currency is less than zero
	if (currency < 0){
		return null;
	}
//declare variables
	var total = 0;
	var rewards = 1;
	var days = 1;
	var pennies = Math.round(currency * 100);
// while the total (total amount ) is less that the pennies (currency input)
	while(total < pennies){
//total equals total plus rewards, increment amount
		total = total + rewards;
//if total is greater than or equal to amount return days
		if (total >= pennies) {
			return days;
		}
//while total is not greater than or equal to pennies multiply rewards by 2 
		rewards = rewards * 2;
//increment by 1 
		days ++;
	}
}
console.log("Days to make $10,000: " + AmountOfDays(10000));
console.log("Days to make 1 bilion: " + AmountOfDays(1000000000));
console.log("Days to make infinite currency: " + AmountOfDays(Infinity));