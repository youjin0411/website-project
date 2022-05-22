foo: {
    console.log(1);
    break foo; //foo레이블 블록문을 탈출한다.
    console.log(2);
}
console.log('Done');

//outer라는 식별자가 붙은 레이블 for문
outer : for(let i = 0; i < 3; i++){
    for(let j = 0; j < 3; j++){
        //i + j == 3이면 outer라는 식별자가 붙은 레이블 for문을 탈출한다.
        if(i + j == 3) break outer;
        console.log(`inner [${i}, ${j}]`);
    }
}
console.log("Done");