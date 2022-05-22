const circle = {
    radius : 5,
    getDiameter(){
        return 2 * this.radius;
    }
};

console.log(circle.getDiameter());

const circle3 = {
    radius : 10,
    getDiameter(){
        return 2 * this.radius;
    }
};
console.log(circle3.getDiameter());

//생성자 함수 
function Circle(radius){
    this.radius = radius;
    this.getDiameter = function(){
        return 2 * this.radius;
    };
}
//인스턴스 생성
const circle1 = new Circle(5);
const circle2 = new Circle(10);

console.log(circle1.getDiameter());
console.log(circle2.getDiameter());
