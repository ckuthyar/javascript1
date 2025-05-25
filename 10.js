class Animal{
  constructor(age){
    this.age=age;
  }
  move(){}
}
class Mammal extends Animal{
  constructor(age,furColor){
    super(age);
    this.furColor=furColor;
      }
}
class Human extends Animal{
  constructor(age,furColor,lang){
    super(age,furColor);
    this.lang=lang;
  }
  speak(){}
}
