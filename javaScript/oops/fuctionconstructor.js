function Person(name,age){
   this.name=name
   this.age=age

}

function Car(make, model){
    this.make=make
    this.model=model
}

let myCar=new Car("Toyota","Camry");
// console.log(myCar)


let myNewCar=new Car("Tata","Safari");
// console.log(myNewCar);



function Tea(type){
    this.type=type
    this.describe=function(){
        return `this is a cup of ${this.type}`
    }
}



let lemonTea=new Tea("Lemon tea");
// console.log(lemonTea.describe());


function Animal(species){
    this.species=species
}


Animal.prototype.sound=function(){
    return `${this.species} makes a sound`
}

let dog =new Animal("Aku");
// console.log(dog.sound());



// Encapsulation

class bankaccount{
    #balance=0;

    deposit(amount){
        this.#balance+=amount
        return this.#balance;
    }

    getBalance(){
        return `$ ${this.#balance}`
    }
}

let account=new bankaccount()

// console.log(account.getBalance())


class CoffeMachine{
    start(){

        return `Starting the machine...`;
    }
    brewCoffee(){
        //complex calculation
        return `Brewing coffee`;
    }

    pressStartButton(){
       let msgone= this.start()
       let msgtwo= this.brewCoffee()

       return `${msgone} + ${msgtwo}`
    }
}

let myMachine=new CoffeMachine();
// console.log(myMachine.start())
// console.log(myMachine.brewCoffee())
// console.log(myMachine.pressStartButton());


// Polymorphism

class bird{
    fly(){
        return `flying...`
    }
}

class Penguin extends bird{
    fly(){
        return `Penguins can't fly`;
    }
}


let Bird=new bird()
let penguin=new Penguin()
// console.log(Bird.fly());
// console.log(Penguin.fly());


class Calculator{
     add(a,b){
        return a+b;
    }
}

let miniCalc=new Calculator();
// console.log(miniCalc.add(2,3))


// Getters and Setters


class Employee{
    constructor (name,salary){
        this.name=name
        this._salary=salary
    }

    
}

let emp=new Employee("Alice",50000);

console.log(emp._salary);