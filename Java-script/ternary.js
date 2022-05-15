let x = 2;

// 2 % 2는 0이고 false로 암묵적 타입 변환된다.
let result = x % 2 ? '홀수':'짝수';

console.log(result);

let x2 = 2;
let result2;

//2 % 2는 0이고 0은 false로 암묵적 타입 변환된다.
if(x2 % 2) result = "홀수";
else       result = "짝수";

console.log(result);

let x3 = 10;

//if...else 문은 표현식이 아닌 문이다. 따라서 값처럼 사용할 수 없다. 
// let result3 = if(x % 2) {result3 ='홀수'; } else { result ='짝수'; };

let x4 = 10;

//삼항 조건 연산자 표현식은 표현식인 문이다. 따라서 값처럼 사용할 수 있다.
let result4 = x % 2 ? '홀수':'짝수';
console.log(result4);