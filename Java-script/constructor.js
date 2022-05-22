const person = new Object();

person.name = "Lee";
person.sayHello = function(){
    console.log(`Hi my name is ${this.name}`);
};

console.log(person);
person.sayHello();

const strObj = new String('Lee');
console.log(typeof strObj);
console.log(strObj);

const numObj = new Number(123);
console.log(typeof numObj);
console.log(numObj);