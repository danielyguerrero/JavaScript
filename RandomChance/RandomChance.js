function casino(quaters){
	var result = 0;
	var winning = 69;
	var price = 0;

	for(let x = quaters; x >=0; x--){
		if (Math.trunc(Math.random() * 100) == winning){
			prize = Math.trunc(Math.random() * 50) + 50;
			quaters = x + prize;
			console.log(" You just Won! " + prize + "quaters! you had " + x + " and now " + quaters + ".");
			return quaters;
		}
		if (x == 0) {
			console.log("You wasted all of your quaters :(");
			return x;
		}
	}
}

console.log("Total after starting with 100 quaters: " + casino(100));
console.log("Total after starting with 10 quaters:" + casino(10));