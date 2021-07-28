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

let person: {
    name:string;
    age:number;
};

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