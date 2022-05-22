let res = [1,2,3].map(function(item) {
    return item * 2;
});
console.log(res); //[2,4,6]

let res2 = [1,2,3].filter(function item(){
    return item % 2;
});

console.log(res2);

let res3 = [1,2,3].reduce(function (acc,cur){
    return acc + cur;
}, 0);
console.log(res);
