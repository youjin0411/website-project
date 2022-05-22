const set = new Set([1,2,3,4],'Hello');
console.log(`Set Iteration 1`);
for(let v of set){
    console.log(v);
}

console.log(`Set Iteration 2`);
for(let v of set.values()){
    console.log(v);
}

console.log(`Set Iteration 3`);
set.forEach(v => {
    console.log(v);
})