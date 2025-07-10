function addnumbers(num1){
    var sum = 0;
    for (var i = 1; i < arguments.length; i++) {
        var num = arguments[i];
        sum = sum + num;
    }
    return sum;
}

var result = addnumbers(10, 20, 30, 40, 50);
console.log(result); 