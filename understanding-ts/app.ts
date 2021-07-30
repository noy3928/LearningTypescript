let userInput: unknown; // 유저가 무엇을 입력할 지 모를 때. 
let userName: string;

userInput = 5;
userInput = 'Max';
//이렇게 두가지를 다 해도 문제가 되지 않는다. 
// userName = userInput; // 여기서 unknown인 경우에는 에러를 발생시키고, any인 경우에는 에러를 발생시키지 않는다. any는 타입스크립트에서 가장 자유로운 타입이다. 

if(typeof userInput === 'string'){
    userName = userInput; // 이렇게 하면 타입스크립트가 에러를 내보내지 않는다. unknown은 어떤 값이어도 괜찮지만, 한번의 체크는 필요하다. any보다는 조금 더 엄격한 타입이다. 
}

//unknown은 any와 뭐가 다를까? 

function generateError(message: string, code: number){
    throw {message: message, errorCode: code};
}

generateError('An error occured!, 500)