//f(x,y) = x+y
function add(x,y) {
    return x + y;
}

// f(2,5) = 7
add(2,5); //7

function add2(x,y) {
    return x + y;
}
let result = add(2,5);
console.log(result); //7

//함수 리터널
let f = function add3(x,y) {
    return x + y;
}

//함수 선언문 : 표현식이 아닌 문이다.
function add7(x,y){
    return x + y;
}
console.log(add7(3,2));

//함수 표현식 
let add8 = function (x,y){
    return x + y;
}
console.log(add8(2,5));

//화살표 함수
const add9 = (x,y) => x + y;
console.log(add9(2,4));

//함수 선언문
function add0(x,y){
    return x + y;
}
//함수 호출
//인수 1과 2가 매개변수 x와 y에 순서대로 할당되고 함수 몸체의 문들이 실행된다. 
let result3 = add(4,5);
console.log(result3)

function add1(x,y){
    console.log(x,y); // 5 1 
    return x + y;
}
console.log(add(5, 1));

function multiple(x,y){
    return x * y; //반환문
}
//함수 호출은 반환값으로 평가된다. 
let result2 = multiple(3,5);
console.log(result2);

function multiply(x,y){
    return x * y; //반환문
    //반환문 이후에 다른 문이 존재하면 그 문은 실행되지 않고 무시된다.
    console.log('실행되지 않는다.');
}
console.log(multiply(3,5));

//매개변수 primitive는 원시 값을 전달받고, 매개변수 obj는 객체를 전달받는다.
function changeVal(primitive, obj5){
    primitive += 100;
    obj5.name = "Kim";
}

//외부 상태
let num = 100;
let person = {name : 'Lee'};

console.log(num); //100
console.log(person); //{name: "Lee"}

//원시 값은 값 자체가 복사되어 전달되고 객체는 참조 값이 복사되어 전달된다.
changeVal(num,person);
//원시 값은 원본이 훼손되지 않는다.
console.log(num); //100
//객체는 원본이 훼손된다.
console.log(person); //{name: "Kim"}
