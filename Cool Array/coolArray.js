
function fancyPantsy(arr, symbol, reverse){
// if symbol is null set it to a default
    if(symbol == null){
        symbol = "->";
    }
// if reverse is null OR it is false execute this
    if (reverse == null || reverse == false){
        for(let x = 0; x < arr.length; x ++){
            console.log( x + " " + symbol + " " +arr[x]);
        }
    } else if (reverse == true){
// Must arr.length -1 to account for 0 when counting backwards in arr; x >= 0 to stop @ 0
        for(let x = arr.length-1; x >= 0; x --){
            console.log( x + " " + symbol + " " + arr[x]);
        }
    }

}

console.log("Symbol = null & Reverse = null: \n");
fancyPantsy(["James", "Jill", "Jane", "Jack"]);

console.log("Custom symbol & Reverse = null: \n");
fancyPantsy(["James", "Jill", "Jane", "Jack"], "=>");

console.log("Custom Symbol & Reverse = true: \n")
fancyPantsy(["danny", "david", "daniel", "dennis"], "==>", true);

console.log("Custom Symbol: & reverse = false: \n")
fancyPantsy(["danny", "david", "daniel", "dennis"], "=====>", false)