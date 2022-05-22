function repeat(n){
    //i를 출력한다.
    for(let i = 0; i < n; i++){
        console.log(i);
    }
}
repeat(5);

function repeat1(n){
    for(let i = 0; i < n; i++){
        //i가 홀수일 때만 출력한다.
        if(i % 2) console.log(i);
    }
}
repeat1(5);

function repeat3(n, f){
    for(let i = 0; i <  n; i++){
        f(i);
    }
}
let logAll = function(i){
    console.log(i)
};
repeat3(5, logAll); // 0 1 2 3 4 

let logOdd = function(i){
    if(i % 2) console.log(i);
};

repeat3(5,logOdd);