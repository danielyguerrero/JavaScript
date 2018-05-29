// Given a string, write a function that will determine whether the braces  - including parentheses (), 
// square brackets [], and curly brackets {} - within the string are valid. That means that any braces 
// within other braces must close before the outer set closes.

// Example: bracesValid("{{()}}[]") returns true because the inner braces close before the outer braces. 
// Each opening brace has a matching closing brace.

// Example:  bracesValid("{(})") returns false because the curly braces close before the parentheses, 
// which starts within the curly braces, had a chance to close.

var open=['{','(','['];
var close=['}',')',']'];
var arr=[];

function bracesValid(str){
	for (var i = 0; i < str.length; i++) {  // Loop through the String

		for(var x=0; x < open.length; x++){  //Loop through theOpen arr

			if(open[x] == str[i]){  //if any of the open array char matches the str[i] push it in the new arr
				arr.push(str[i]);
			}
		}
		if(str[i] == close[x] && arr.length == 0){   // if the arr
			console.log('Started with an open brace. False')
			return false;
		}
		if(arr[x.length-1]== close[x] && arr[arr.length-2]==open[x]){
			arr.pop();
			arr.pop();
		}
	}
	if(arr.length == 0){
		console.log('True');
		return true;
	}

}


var myStr="{([])}";

bracesValid(myStr);