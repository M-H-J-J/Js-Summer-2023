// 1
class Animal {
    constructor(name){
        this.name = name
    }

    speak(){
        console.log((`Hello, my name is ${this.name}.`))
    }
}
let duck = new Animal('George');
duck.speak()

// 2
class Person {
    constructor(name, age){
        this.name = name,
        this.age = age
    }
    greet(){
        console.log((`Hello, my name is ${this.name} and I am ${this.age} years old.`))
    }
}
let individual1 = new Person('Devon', 29);
individual1.greet()

// 3
class Car {
    constructor(make, model, year){
        this.make = make;
        this.model = model;
    }
    start(){
        console.log((`The ${this.make} ${this.model} is starting.`))
    }
}
let Sandstorm = new Car('honda', 'odyssey', 2000)
Sandstorm.start()

//4
class Rectangle {
    constructor(width, height){
        this.width = width;
        this.height = height;
    }
    getArea(){
        return this.width * this.height
    }
}
let deskTop = new Rectangle(42,72)
console.log(deskTop.getArea())

//5
class Cube extends Rectangle{
    constructor(width, height, sideLength){
        super(width, height)
        this.sideLength = sideLength
    }
    getArea(){
        return this.width * this.height * this.sideLength
    }
}
let tableTop = new Cube(2, 2, 2);
console.log(tableTop.getArea())

//6
class BankAccount {
    constructor(accountNumber, accountHolderName, balance){
        this.balance = balance
    }
    deposit(number){
        this.balance += number
    }
}
let myAccount = new BankAccount(777, 'Devon O', 7899.45);
myAccount.deposit(1000)
console.log(myAccount.balance)

//7
class Individual {
    constructor(name, email){
        this.name = name;
        this.email = email;
    }
    sendEmail(string){
        console.log((`"${string}" has been emailed to ${this.email}`))
    }
}
let Jake = new Individual('Jake', 'jj@msn.com')
Jake.sendEmail('Hey, are you free?')

//8
class Product {
    constructor(name, price, description){
        this.price = price
    }
    discount(percentage){
        return this.price - ((percentage / 100) * this.price)
    }
}
let Speed2 = new Product('Speed 2', 17, 'A questionable movie');
console.log(Speed2.discount(10))