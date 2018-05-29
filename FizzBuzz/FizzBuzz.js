    // If the number is divisible by both 3 and 5, log "FizzBuzz" instead of the number
    // If the number is divisible by 3 but not by 5, log "Fizz" instead of the number
    // If the number is divisible by 5 but not by 3, log "Buzz" instead of the number


var myArr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

function fizzBuzz(arr){
	for(var i=0; i < arr.length; i++){

		if(arr[i]%3 == 0 && arr[i]%5 == 0){
			arr[i] = "FizzBuzz";
		}
		if(arr[i]%3 == 0){
			arr[i] = "Fizz";
		}
		if(arr[i]%5 == 0){
			arr[i] = "Buzz";
		}
	}
	console.log(arr);
}

fizzBuzz(myArr);