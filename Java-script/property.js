let person = {
    name : 'Lee'
};

//마침표 표기법에 의한 프로퍼티 접근
console.log(person.name); //Lee

//대괄호 표기법에 의한 프로퍼티 접근
console.log(person[`name`]);

let person2 = {
    name2 : "Lee"
}
person2.name2 = "Kim";
person2.age = 18;

console.log(person2);


let person3 = {
    name :"yujin",
    age : 18
}
person3.gender = '여';

//프로퍼티 삭제하기
delete person3.age;

console.log(person3)

let obj = {
    name : 'Lee',
    sayHi : function(){
        console.log('Hi! '+this.name)
    }
};
obj.sayHi();

let obj2 = {
    name : "Kim",
    sayHi(){
        console.log(`He! ${this.name}`);
    }
}
obj2.sayHi();