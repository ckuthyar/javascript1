var s1 = 'Hello';
function func1() {
  var s1="World";
  console.log(s1);   //local variable will get precedence. World will be printed
}
func1()
console.log(s1);  //global variable will be referenced. Hello will be printed

