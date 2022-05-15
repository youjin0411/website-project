//빈 객체의 생성
const person = new Object();

//프로퍼티 추가
person.name = 'Lee';
person.sayHello = function(){
    console.log(`Hi! My name is` + this.name);
};

console.log(person); //{name: "Lee", sayHello:f}
person.sayHello(); //Hi! My name is Lee

//생성자 함수
function Circle(radius){
    //생성자 함수 내부의 this는 생성자 함수가 생성할 인스턴스를 가리킨다.
    this.radius = radius;
    this.getDiameter = function(){
        return 2 * this.radius;
    };
}
//인스턴스 생성 
const Circle1 = new Circle(5);
const Circle2 = new Circle(10);

console.log(Circle1.getDiameter()); //10
console.log(Circle2.getDiameter()); //20

