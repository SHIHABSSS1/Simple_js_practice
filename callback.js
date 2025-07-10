function explore_callback(name, age, call_back) {
  
  console.log("hello md. " + name + "!");
  console.log("You are " + age + " years old.");
  call_back();
}
function clean() {
  console.log("You will be clean the room.");
}
function School()
{
  console.log("You will be in school.");
}

explore_callback("Shihab", 25, clean);
explore_callback("Siam", 25, School);
