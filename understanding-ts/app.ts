//타입스크립트에서 객체를 선언하는 방법 
// const person:{
//     name:string;
//     age:number;
// } = {
//     name: 'Leo',
//     age:30,
// }

const person = {
    name: 'Leo',
    age:30,
    hobbies:["Sports", "Cookings"]
}

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