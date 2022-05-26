let message = "Hello"
const MY_CONSTAND = 1234
prompt("숫자를 입력하시오",0); //prompt(텍스트 메시지, 초기값)
let age = prompt('이름을 입력해주세요', "홍길동")

let isBoss = confirm('당신이 주인인가요?') //질문의 확인 취소 버튼이 있는 모던 창 

alert(!!"non- empty string"); //ture
alert(!!null); //false

let i = 0;
//0, 1, 2가 출력
while(i < 3){
    alert(i);
    i++;
}
let i2 = 0
do{
    alert(i);
    i++;
}while(i < 3);

//0,1,2 출력
for(let k =0; k < 2; k++){
    console.log(k);
}

//반복문 바깥에 변수 정의
let s= 0; 
//기존에 정의된 변수(i)를 사용하여 증감
for(s = 0; s < 3; s++){
    console.log(i);
}
//3, 반복문 밖에서 선언한 변수이므로 사용할 수 있음
console.log(i);

//무한 루프
for(;;){

}

//switch 문
let a =  2+2;
switch(a){
    case 3:
        console.log('비교하려는 값보다 작습니다.');
        break;
    case 4:
        console.log('비교하려는 값과 일치합니다.');
        break;
    case 5:
        console.log('비교하려는 값보다 큽니다. ')
        break;
    default:
        console.log('어떤 값인지 파악이 되지 않습니다. ')
}

//여러 개의 case문 묶기
let c = 3;
switch(c){
    case 4:
        console.log('계산이 맞습니다 ! ');
        break;
    case 3:
    case 5:
        console.log('계산이 틀립니다.');
        console.log('수학 수업을 다시 들어보는걸 권유 드립니다 ');
        break;
    default:
        console.log("계산 결과가 이상하네요.");
    
}
