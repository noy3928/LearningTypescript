let age:number;

age = 12;

//문자열과 문자열배열 이 두가지 타입을 동시에 지정할 수 있다. 
let userName:string | string[];

userName = 'Max';

let isInstructor: boolean;

isInstructor = true;

//more complex types 

let hobbies: string[];

hobbies = ['Sports', 'Cooking'];

//type alias는 타입스크립트에서만 사용하는 선언방법이다. 여기에는 타입만을 저장하고, 저장한 타입을 다른곳에서 적용할 수 있다. 
type Person = {
    name:string;
    age:number;
}

let person: Person;

person = {
    name:'Max',
    age:32
}

let people: {
    name:string;
    age:number;
}[]

//Type inference
let course: string | number = 'React - The Complete Guide';

course = 12341;