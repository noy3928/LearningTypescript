//타입스크립트에서 객체를 선언하는 방법 
// const person:{
//     name:string;
//     age:number;
// } = {
//     name: 'Leo',
//     age:30,
// }

const person: {
    name: string;
    age: number;
    hobbies: string[];
    role:[number, string]; 
    //이것이 튜플을 선언하는 방식이다. 이것이 타입스크립트에게 말하는 것은 무엇이냐? 나는 배열을 가질 것인데, 첫번째는 number이어야 하고, 두번째는 string이어야 한다는 것을 말하는 것이다. 
} = {
    name: 'Leo',
    age:30,
    hobbies:["Sports", "Cookings"],
    role: [2, 'author'] // 이것은 유니온 타입이라고 부르기도 한다. 
}

person.role.push('admin'); // 그런데 이 부분에서는 에러가 나지 않는 이유는 무엇일까? 사실 push는 예외사항이다. 튜플이 허락하게 되는. 그리고 이것을 타입스크립트는 잡아내지 못한다. 
// person.role[1] = 10; //위에서 튜플을 선언했기 떄문이 이 부분에서 에러가 나게 된다. 

// person.role = [0, 'admin', 'user'] //만약에 이와같이 정해진 튜플의 갯수를 넘어서거나, 아예 빈 배열을 만들려고 하는 경우에는 에러가 생긴다. 

let favoriteActivities: string[];
// favoriteActivities = 'sports' // 이런 식으로 저장하면 에러가 난다. 
// favoriteActivities = ['Sports', 1] // 이렇게 숫자와 섞어도 에러가 난다. 
favoriteActivities = ['Sports'];

console.log(person.name)

for ( const hobby of person.hobbies) {
    //이런식으로 처음부터 접근해도 타입스크립트는 뭐라고 하지 않는다. 왜냐하면 위에서 부터 이녀석의 타입을 알고 있기 때문이다. 
    console.log(hobby.toUpperCase()) 
    // console.log(hobby.map()) // 이런 식으로 선언하면, 에러를 내보낸다. 이것은 문자열이지 문자열 배열이 아니기 때문이다. 이런 포인트에서 타입스크립트는 빛이 난다. 
}

//튜플에 대하여.  [1,2] 이런 형식이 튜플이다. 배열과 같아보이지만, 그 내의 형식이 정해져있도록 하는 것. 
