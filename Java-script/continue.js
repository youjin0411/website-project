let string = 'hello world';
let seach = 'l';
let count = 0;

//문자열은 유사 배열이므로 for문으로 순회할 수 있다.
for(let i = 0; i < string.length; i++){
    //'l'이 아니면 현 지점에서 실행을 중단하고 반복문의 증감식으로 이동한다.
    if(string[i] !== seach) continue;
    count++; //continue문이 실행되면 이 문은 실행되지 않는다. 
}
console.log(count); //3

//참고로 String.prototype.match 메서드를 사용해도 같은 동작을 한다.
const regxp = new RegExp(seach, 'g');
console.log(string.match(regxp).length); //3

