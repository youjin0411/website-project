let num = 2;

//0은 false로 취급된다.
let kind = num ? (num > 0 ? '양수':'음수'):'영';
console.log(kind);