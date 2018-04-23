function coolArray(arr, symbol, reverse){
    if (symbol == null){
        symbol = "-->"
    }
    if (reverse == null){
        for(let x = 0; x < arr.length; x++){
            console.log(x + " " + symbol + " " + arr[x]);
        }
    } else if (reverse == true){
        for (let x = arr.length - 1; x >= 0; x--){
            console.log(x + " " + symbol + " " + arr[x]);
        }
    }
}

coolArray(["Daniel", "Danny", "Dennis", "David"]);

console.log("custom symbol:")
coolArray(["Daniel", "Danny", "Dennis", "David"], "=>");

console.log('reverse order:');
coolArray(["Daniel", "Danny", "Dennis", "David"], "=>", true)