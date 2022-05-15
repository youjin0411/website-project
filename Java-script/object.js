let person = {
    name : 'Lee',
    sayHello: function(){
        console.log(`Hello! My name is ${this.name}.`);
    }
};

console.log(typeof person); //object type을 구하는 것이므로 객체 object가 출력된다. 
console.log(person); // {name : "Lee", sayHello : f}
 
let empty = {}; //빈객체
console.log(typeof empty); //object

let person2 = {
    // 프로퍼티 키는 name, 프로퍼티 값은 'Lee'
    name : 'Lee',
    // 프로퍼티 키는 age, 프로퍼티 값은 20
    age : 20
};

let person3 = {
    fistName : "Ung-mo", //식별자 네이밍 규칙을 준수하는 프로퍼티 키
    'last-name' : 'Lee'
};

console.log(person3); //{firstName : "Ung-mo", last-name : "Lee"}

let obj = {};
let key = `Hello`;

//ES5: 프로퍼티 키 동적 생성
obj[key] = 'world';
//ES6 : 계산된 프로퍼티 이름
//var obj = {[key]: 'world};

console.log(obj)

let foo = {
    o: 1,
    1: 2,
    2: 3
};

console.log(foo); //{0:1, 1:2, 2:3}

let foo2 = {
    var : '',
    function : ''
};
console.log(foo2); //{var:"", function : ""}

let foo3 = {
    name : "Lee",
    name: 'Kim'
};
console.log(foo3);