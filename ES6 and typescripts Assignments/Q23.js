function* ArmstrongNumber(){
    let i=0;
    yield 1;
    yield 153;
    yield 370;
    yield 371;
    yield 407;
    while(true){
        return "error! avobe one thousend";
    }

}
const getNextArmStrong= ArmstrongNumber();
console.log(getNextArmStrong.next().value)