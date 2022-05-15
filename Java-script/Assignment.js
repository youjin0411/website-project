let x = 5;
let result;

//선할당, 후증가(postifix increment operator)
result = x++;
console.log(result, x);

//선증가 후할당(prefix increment operator)
result = ++x;
console.log(result,x);

//선할당 후감소(postifix decrement operator)
result = x--;
console.log(result,x);

//선감소 후할당(prefix decrement operator)
result = --x;
console.log(result,x);