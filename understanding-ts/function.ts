function add(n1: number, n2: number){
    return n1 + n2;
}

//console.log같이 리턴하는 값이 없는 경우에는 void를 반환한다. 
function printResult(num: number): void{
    console.log('Result: ' + num)
}

function addAndHandle(n1: number, n2:number, cb: (num: number) => void){
    const result = n1 + n2;
    cb(result)
}

console.log(printResult(add(5,12))) // 이렇게 출력하면 undefine이 나온다. 

//이렇게 함수를 타입으로 지정할 수 있다. 
// let combineValues: Function;
let combineValues: (a: number, b:number) => number; //이렇게 에로우 함수로 함수타입을 지정해줄 수 있지만, 리턴값이 무엇이 될 것인지 타입은 지정해주어야 한다.

combineValues = add;
// combineValues = printResult; // 이렇게 콤파일을 하면 undefine을 내보낼 것이다. // 에로우 함수로 했을 경우, 이 함수에서는 에러를 내보낸다. 

console.log(combineValues(8, 8));

// addAndHandle(10, 20, (result) => {
//     console.log(result);
// }