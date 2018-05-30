var arr = [34, 203, 3, 746, 200, 984, 198, 764, 9];

function bubbleSort(arr) {
    var swapped;   // declare var swapped. this will keep track when a swap has occured.
    do {
        swapped = false;   // initialize swap to false
        for (var i = 0; i < arr.length - 1; i++) {  // for-loop through the arr
            if (arr[i] > arr[i + 1]) {  // if-statement. if greater swap
                var temp = arr[i];    // declare temp and store value (for the swap)
                arr[i] = arr[i + 1];  // replace value of next index into current index
                arr[i + 1] = temp;  // next index will take temp's value. swap complete.
                swapped = true; // swap just happened. re-do for loop.
            }
        }
    } while (swapped); // when swapped is == true, re-do.
}

bubbleSort(arr);
console.log(arr);

// ===================================================================================
//                               Bubble Sort 2
// ==================================================================================
// array to sort
var array = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];

// swap function helper
function swap(array, i, j) {
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

// be careful: this is a very basic implementation which is nice to understand
// the deep principle of bubble sort (going through all comparisons) but it can be greatly improved for performances

// function bubbleSortBasic(array) {
//   for(var i = 0; i < array.length; i++) {
//     for(var j = 1; j < array.length; j++) {
//       if(array[j - 1] > array[j]) {
//         swap(array, j - 1, j);
//       }
//     }
//   }
//   return array;
// }

// console.log(bubbleSortBasic(array.slice())); // => [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

//==================================================================
//
//==================================================================

// correct implementation: this is the usual implementation of the bubble sort algorithm. 
//Some loops execution are avoided if not they are not needed

function bubbleSort(array) {
  var swapped;
  do {
    swapped = false;
    for(var i = 0; i < array.length; i++) {
      if(array[i] && array[i + 1] && array[i] > array[i + 1]) {
        swap(array, i, i + 1);
        swapped = true;
      }
    }
  } while(swapped);
  return array;
}

console.log(bubbleSort(array)); // => [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
