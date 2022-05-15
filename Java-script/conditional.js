//블록문
{
    let foo = 10;
}

//제어문
let x = 1;
if(x < 10){
    x++;
}

//함수 선언문
function sum(a,b){
    return a + b;
}

let num = 2; 
let kind;

//if문
if(num > 0){
    kind = '양수' // 음수를 구별할 수 없다.
}
console.log(kind); //양수

//if...else문
if(num > 0){
    kind = "양수";
}else{
    kind ="음수"; //0은 음수가 아니다.
}
console.log(kind);

//if...else if문
if(num > 0){
    kind = '양수';
}else if(num < 0){
    kind ='음수';
}else{
    kind ='영';
}
console.log(kind)

let x2 = 2;

// 0은 false로 취급된다.
let result = x % 2 ? '홀수':'짝수'; //2 % 2 == 0 이면 false -> 짝수
console.log(result); //짝수

let num2 = 2;
//0은 false로 취급된다.
let kind2 = num2 ? (num2 > 0 ? '양수':'음수') : '영';
console.log(kind2); //양수

let year = 2000;
let month = 2;
let days = 0;

switch(month){
    case 1: case 3: case 5: case 7: case 8: case 10: case 12:
        days = 31;
    break;

    case 4: case 6: case 9: case 11:
        days = 30;
    break;

    case 2:
        days = ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) ? 29:28;
    break;
    default:
        console.log('Invalid month');
}

console.log(days); // 29 

for(let i = 0; i < 2; i++){
    console.log(i);
}
for(let i = 1; i >= 0; i--){
    console.log(i);
}
//무한루프 : for(;;){...}

for(let i = 1; i <= 6; i++){
    for(let j = 1; j <= 6; j++){
        if(i + j == 6) console.log(`[${i},${j}]`);
    }
}

let count = 0;
//count가 3보다 작을 때까지 코드 블록을 계속 반복 실행한다. 
while(count < 3){
    console.log(count); //0,1,2
    count++;
}

//무한루프 while(ture)

while(true){
    console.log(count);
    count++;
    //count가 3이면 코드 블록을 탈출한다.
    if(count === 3) break;
}

let string = 'Hello World';
let search ='l';
let index;

//문자열은 유사 배열이므로 for문으로 순회할 수 있다.
for(let i = 0; i < string.length; i++){
    //문자열의 개별 문자가 'l'이면
    if(string[i] === search){
        index = i;
        break; //반복문을 탈출한다.
    }
}

console.log(index);