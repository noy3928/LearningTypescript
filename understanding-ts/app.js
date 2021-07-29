function add(n1, n2, showResult, phrase) {
    var result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
var number1 = 5;
var number2 = 2.8;
var printResult = true;
var resultPhrase = "Result is ...";
add(number1, number2, printResult, resultPhrase);
/*
자바스크립트는 코드를 작성하는 중에 타입을 확인하지 않지만,
타입스크립트는 계속해서 타입을 확인해준다.
*/ 
