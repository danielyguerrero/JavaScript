// function that can take a start point, end point, and skip amount, 
// to print all numbers in the range.

function printRange(start, end, skip){
	if (skip == null) skip =1;
	if(end == null){
		end = start;
		start = 0;
	}
	for (var x = start; x < end; x += skip){
		console.log(x);
	}
}

console.log("doesn't include end point (2-10): 2,4,6,8");
printRange(2,10,2);

console.log("negative numbers work:");
printRange(-4,-1,2);

console.log("skip defaults to 1, should print 4,5,6,7:");
printRange(4,8);

console.log("single argument becomes 0 start to input end, should print 0,1,2,3");
printRange(4);