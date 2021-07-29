function add(n1: number, n2: number){
    return n1 + n2;
}

//console.log같이 리턴하는 값이 없는 경우에는 void를 반환한다. 
function printResult(num: number): void{
    console.log('Result: ' + num)
}
console.log(printResult(add(5,12))) // 이렇게 출력하면 undefine이 나온다. 

