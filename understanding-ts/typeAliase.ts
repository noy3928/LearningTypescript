//type alias는 어떤 방식으로든 원하는 방식대로, 타입을 지정할 수 있다. 
type User = { name: string; age: number };
const u1: User = { name: 'Max', age: 30 };

//그리고 이것들은 불필요한 반복을 없애줄 수 잇다. 예를 들면, 아래와 같이 난잡한 코드를 단순화할 수 있다. 
// function greet(user: { name: string; age: number }) {
//     console.log('Hi, I am ' + user.name);
//   }
   
//   function isOlder(user: { name: string; age: number }, checkAge: number) {
//     return checkAge > user.age;
//   }

type Users = { name: string; age: number };
 
function greet(user: Users) {
  console.log('Hi, I am ' + user.name);
}
 
function isOlder(user: Users, checkAge: number) {
  return checkAge > user.age;
}

