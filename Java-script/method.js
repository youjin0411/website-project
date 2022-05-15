let Circle = {
    radius: 5,  // <- 프로퍼티

    //원의 지름
    getDiameter: function() {
        return 2 * this.radius; //this는 Circle을 가리킨다. 
    }
};

console.log(Circle.getDiameter); // 10

let person = {
    name : "Lee"
};

//마침표 표기법에 의한 프로퍼티 접근
console.log(person.name); //Lee

//대괄호 표기법에 의한 프로퍼티 접근
console.log(person['name']); //Lee


let person4 = {
    name : "Lee"
};

//person 객체에 name 프로퍼티가 존재하므로 name 프로퍼티의 값이 갱신된다. 
person4.name = "Kim";
console.log(person); //{name: "Kim"}

let person5 = {
    name : "Lee"
};

//person5 객체에는 age 프로퍼티가 존재하지 않는다. 
//따라서 person객체에 age 프로퍼티가 동적으로 생성되고 값이 할당된다.
person5.age = 20;
console.log(person5); //{name : "Lee", age : 20}

let person6 = {
    name : "Lee"
};

//프로퍼티 동적 생성
person6.age = 20;

//person6 객체에 age 프로퍼티가 존재한다. 
//따라서 delete 연산자로 age프로퍼티를 삭제할 수 있다. 
delete person6.age;

console.log(person6)

let x = 1 , y = 2;
let obj = {
    x : x,
    y : y
};

console.log(obj); //{x : 1. y : 2}


let x2 = 1; let y2 = 2;

//프로퍼티 축약 표현
const obj2 = {x,y};

console.log(obj2); //{x: 1 , y : 2}

let obj3 = {
    name : "Lee",
    sayHi3: function(){
        console.log(`Hi! `+this.name)
    }
};
obj3.sayHi3();

const obj4 = {
    name : "Lee",
    //메서드 축약 표현
    sayHi() {
        console.log(`Hi! `+this.name)
    }
}
obj4.sayHi();