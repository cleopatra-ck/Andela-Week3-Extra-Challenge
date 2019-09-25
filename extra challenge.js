


var iterations;
function missing(arr) {
    var ic = 0;      
    const result = [];
    if (arr.length <= 1) { return result }
    var i = 1, val = arr[0] + 1;
    const count = ((arr[arr.length - 1]) - val) - (arr.length - 2);
    while (result.length < count) {
        ic = 0;
        while (arr[i] !== val) { 
          result.push(val++) 
          ic ++;          }
        i++;
        val++;
        iterations += ic ? ic : 1; 
    }
    return result;
}

function doIt(arr){
    iterations = 0;
    console.log("Array [" + arr.join("") + "] missing ["+ missing(arr).join("") + "] in " + iterations + " iterations.");
}

doIt([0,5,10])    
doIt([0,2,4,8])
doIt([0, 1])                 
doIt([0,10])    

 