
function add(n1: number, n2:number, showResult: boolean, phrase: string){

    //한 구문 안에서 더할 때, 스트링과 숫자가 같이 더해지면, 모두 문자열로 인식하게 된다. 
    const result = n1 + n2;
    if(showResult){
        console.log(phrase + result)
    }else{
        return result;
    }
    
}

let number1: number;
// number = "hi" //number로 선언해둔 타입에서는 문자열이 들어갈 수 없다. 
const number2 = 2.8;
const printResult = true;
const resultPhrase = "Result is ..."

add(number1, number2, printResult, resultPhrase);



/*
자바스크립트는 코드를 작성하는 중에 타입을 확인하지 않지만,
타입스크립트는 계속해서 타입을 확인해준다. 
*/