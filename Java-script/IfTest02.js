//x가 짝수이면 result 변수에 문자열 '짝수'를 할당하고, 홀수이면 문자열 '홀수'를 할당한다.
let x = 2;
let result;

if(x%2){ // 2 % 2는 0이다. 0은 false이므로 암묵적 강제 변환된다. 
    result = "홀수";
}else{
    result ="짝수";
}
console.log(result); //짝수