for(let i = 0; i < 2; i++){
    console.log(i);
}
for(let i = 1; i >= 0; i--){
    console.log(i);
}
console.log();

for(let i = 1; i <= 6; i++){
    for(let j = 1; j <= 6; j++){
        if(i + j == 6 ) console.log(`[${i},${j}]`);
    }
}