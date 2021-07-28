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


//Functions & types 

// function add(a:number, b:number){
//     return a + b; //현재 여기서 선언해주지 않은 것은 return의 값이다. 그런데 여기서도 자연스럽게, type inference가 적용이 된다. 그런고로 이 리턴의 타입은 number가 된다. 
// }


//void 타입은 return할 값이 없다는 말이다. 
function print(value:any){
    console.log(value)
}

//generic에 대하여 이 generic을 사용하면 이 함수에 대하여 처음에는 어떤 값이든 flexible하게 이용이 가능하지만, 한번 사용하고 난 값에 대해서는 고정적인 타입을 가지게 된다. 
function insertAtbeginning<T>(array: T[], value:T){
    const newArray = [value,...array];
    return newArray;
}

const demoArray = [1,2,3];

const updatedArray = insertAtbeginning(demoArray, -1);
const stringArray = insertAtbeginning(['a','b','c'],'d')

