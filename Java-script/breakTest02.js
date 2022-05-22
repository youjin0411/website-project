let string = "Hello World";
let search = 'l';
let index;

//문자열은 유사 배열이므로 for문으로 순회할 수 있다.
for(let i = 0; i < string.length; i++){
    //문자열 개별 문자가 'l'이면 
    if(string[i] == search){
        index = i;
        break; //반복문을 탈출한다. 
    }
}
console.log(index);