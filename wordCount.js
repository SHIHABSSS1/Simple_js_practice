var speech = 'my name is    John Doe and I am a software engineer ';
var count = 0;
for (var i = 0; i < speech.length; i++){
    var char = speech[i];
    if (char == ' ' && speech[i - 1] != ' ') {
        count++;
    }
}
console.log('the number of words in the speech is : ' + count); //sentence ends with a space
