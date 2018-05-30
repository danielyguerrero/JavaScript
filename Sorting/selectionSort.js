function selectionSort(items) {
	var length = items.length;
	for (var i = 0; i < length - 1; i++) {
		//Number of passes
		var min = i; //min holds the current minimum number position for each pass; i holds the Initial min number
		for (var j = i + 1; j < length; j++) { //Note that j = i + 1 as we only need to go through unsorted array
			if (items[j] < items[min]) { //Compare the numbers
				min = j; //Change the current min number position if a smaller num is found
			}
		}
		if (min != i) {
			//After each pass, if the current min num != initial min num, exchange the position.
			//Swap the numbers 
			var tmp = items[i];
			items[i] = items[min];
			items[min] = tmp;
		}
	}
}
// =================================================================================================
//                                            Second Method
//==================================================================================================

// // array to sort
// var array = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];

// // swap function helper
// function swap(array, i, j) {
//   var temp = array[i];
//   array[i] = array[j];
//   array[j] = temp;
// }

// function selectionSort(array) {
//   for(var i = 0; i < array.length; i++) {
//     var min = i;
//     for(var j = i + 1; j < array.length; j++) {
//       if(array[j] < array[min]) {
//         min = j;
//       }
//     }
//     if(i !== min) {
//       swap(array, i, min);
//     }
//   }
//   return array;
// }

// console.log(selectionSort(array)); // => [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

