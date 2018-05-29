// =========================================     METHOD 1    Reverse a String With Built-In Functions    =========================================

function reverseString (str){
	var arr = str.split(" ");
	arr.reverse();
	str = arr.join(" ");
	console.log(str);
}

reverseString("Hello my name is Phill");

