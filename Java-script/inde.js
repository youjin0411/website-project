const arr = [1, 2, 3];
console.log(arr);
console.log("Hello World");
//ctrl + alt + n => console 출력창 실행 

//변수는 하나의 값을 저장하기 위한 수단이다.
let userId = 1;
let userName = "Yujin";

//객체나 배열 같은 자료구조를 사용하면 여러 개의 값을 하나로 그룹화해서 하나의 값처럼 사용할 수 있다.
let user = {id : 1, name : "Yujin"}

let users = [
    {id : 1, name : "Yujin"},
    {id : 2, name : 'Kim'}
];

let result = 10+20; 
console.log(result);

//변수 선언문
let x;

//할당문
x = 5; 

//함수 선언문
function foo(){}

//조건문
if(x > 1){
    console.log(x);
}

//반복문
for(let i = 0; i < 2; i++){
    console.log(i);
}