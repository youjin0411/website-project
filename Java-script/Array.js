const arr = new Array(1,2,3,4,5);

console.log(`Array Iteration 1`);
for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

console.log(`Array Iteration 2`);
arr.forEach(v => {
    console.log(v)
});

console.log(`Array Iteration 3`);
for(let v of arr){
    console.log(v)
};
console.log(`Array Iteration 4`);