var s1 = 'Hello';
function func1() {
  s1="World";
  console.log(s1);   //local variable will get precedence. World will be printed
}
func1()

