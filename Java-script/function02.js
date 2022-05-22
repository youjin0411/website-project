let add1 = (function (){
    let a = 10;
    return function (x,y){
        return x + y + a;
    };
}());

console.log(add1(1,2)); // 13

//화살표 함수
const add = (x,y) => x + y;
console.log(add(2, 5));

//함수 호출
function add2(x,y){
    return x + y;
}
//함수호출
