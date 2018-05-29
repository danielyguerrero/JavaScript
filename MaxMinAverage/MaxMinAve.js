var arrOne = [10,8,3,2,9,4,5,7];

function maxMinAvg (arr){
	var max = arr[0];
	var min = arr[0];
	var total=0;

	for(var i=0; i<arr.length; i++){
		total += arr[i];
		if(arr[i]> max){
			max=arr[i];
		}
		if(arr[i] < min){
			min=arr[i];
		}
		var avg=total/arr.length;
	}
	console.log('The Max number is: '+max);
	console.log('The Min number is: '+min);
	console.log('The Average number is: '+avg);
}

maxMinAvg(arrOne);