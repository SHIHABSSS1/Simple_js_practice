var num = [1, 2, 3, 4, 4, 6, 7, 7, 9, 1];
var uniqueNum = [];
for (var i = 0; i < num.length; i++){
    var element = num[i];
    var index = uniqueNum.indexOf(element);
    if (index === -1) {
        uniqueNum.push(element);
    }
}
console.log('the unique number is : '+uniqueNum);