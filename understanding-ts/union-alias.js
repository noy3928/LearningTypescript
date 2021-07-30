"use strict";
//유니온 타입에 대하여 
function combine(input1, input2, resultConversion //union type combine with literal type
) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2; // 처음에 이 유니언을 선언했을 때, 여기서 에러가 나는 이유는 +에서 에러가 나는 경우에 있을 수 있기 때문에 그런 것이다. 
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
    // if(resultConversion === 'as-number'){
    //     return +result; //이렇게 + 기호를 넣는 것은 parseFloat의 줄임문법이다. 
    // }else{
    //     return result.toString();
    // }
    // return result;
}
const combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges);
const combinedStringAges = combine('30', '26', 'as-number');
console.log(combinedStringAges);
const combinedNames = combine('Max', 'Anna', 'as-text'); // 이렇게 한번에 두 가지를 다 선언하고 싶은 경우에 도와주는 것이 유니온 타입이다. 
console.log(combinedNames);
