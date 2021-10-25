

type 엔터테인먼트 = {
    노래제목 : string,
    가수 : string,
} 

let 내가좋아하는것 : 엔터테인먼트 = {
    노래제목 : '삐삐',
    가수 : '아이유',
}

let project : {
    member : string[],
    days: number,
    started: boolean,
} = {
    member : ['kim', 'park'],
    days : 12,
    started : true,
}

let 학교 : {
    score : (number | boolean)[],
    teacher : string,
    friend : string | string[],
} = {
    score : [100, 97, 84],
    teacher : 'Phil',
    friend : 'John',
}

학교.score[4] = false;
학교.friend = ['Lee', 학교.teacher]

function count (x : string | number) : number {
    return x.toString.length
}

function percentage(){}

//object타입을 정의한 type alias 두개를 & 기호로 합칠 때 중복된 속성이 있으면 어떻게 될까요? 

type X = {x : string, y : number}
type Y = {x : string, z : number}
type Z = X & Y 

const hi : Z = {
    x : '안녕',
    y : 123,
    z : 123,
}
// 정답은 아무일도 일어나지 않는다?? 아무 문제가 없다?? 

//(숙제2) 다음 조건을 만족하는 타입을 만들어봅시다 
/*
1.이 타입은 object 자료형이어야 합니다. 
2.이 타입은 color라는 속성을 가질 수도 있으며 항상 문자가 들어와야 합니다. 
3.이 타입은 size라는 속성이 있어야하며 항상 숫자가 들어와야합니다. 
4.이 타입은 position 이라는 변경불가능한 속성이 있어야하며 항상 숫자가 담긴 array 자료가 들어와야 합니다. 
*/

type Yes = {
color? : string,
size : number,
readonly postion : number[],
}

//(숙제3) 다음을 만족하는 type alias를 연습삼아 간단히 만들어보십시오. 
/* 
1.대충 이렇게 생긴 object 자료를 다룰 일이 많습니다. { name : 'kim', phone : 123, email : 'abc@naver.com' }
2.object 안에 있는 이름, 전화번호, 이메일 속성이 옳은 타입인지 검사하는 type alias를 만들어봅시다. 
3.각 속성이 어떤 타입일지는 자유롭게 정하십시오. 
*/

type User = {
    name : string,
    phone : number,
    email : string
}

const someoneContact : User = {
    name : '노예찬',
    phone : 123123,
    email : 'noy3928@naver'
}

// (숙제4). 다음을 만족하는 type alias를 만들어보십시오.

/*
1. 숙제2와 똑같은데 이번엔 이름, 전화번호, 이메일, 미성년자여부 속성을 옳은 타입인지 검사하는 type alias를 만들어봅시다.
2. 미성년자 여부 속성은 true/false만 들어올 수 있습니다. 
3. 멋있게 숙제2에서 만들어둔  type alias를 재활용해봅시다.
*/

type Adult = {
    adult : boolean
}
type NewUser = User & Adult

const 회원가입 : NewUser = {
    name : '짱구',
    phone : 123123,
    email : 'noy3928',
    adult : false
}

/*
Q. 이런 함수는 어떻게 만들까요?

- '가위', '바위', '보' 문자들만 파라미터로 입력할 수 있고

- '가위', '바위', '보' 라는 문자들만 담을 수 있는 array 자료만 return 할 수 있습니다.

- 예를 들면 ['가위', '보', '가위'] 이런거 return 가능

- ['가위', '바보'] 이런거 return하면 에러나야함 
*/

type 이것만가능 = '가위' | '바위' | '보'
type 가위바위보배열 = 이것만가능[]


function 가위바위보 (x:이것만가능):가위바위보배열 {

    return ['가위']
}

type 함수 = (x : number ) => number

let 회원정보 = {
    name : 'kim',
    age : 30,
    // plusOne : (x : number) => number,
    changeName :() => {},
  }
//   회원정보.plusOne(1);
//   회원정보.changeName();


/* 
(숙제1) 위 코드에서 회원정보라는 변수에 타입지정 알아서 해보십시오. 

- plusOne이라는 속성은 함수여야하고, 숫자를 넣어서 숫자를 뱉는 함수여야합니다.

- changeName이라는 속성은 함수여야하고, 아무것도 return하면 안됩니다. 

- type 키워드를 쓰든 말든 알아서 합시다. 
*/




/* 
(숙제2) 다음 함수2개를 만들어보고 타입까지 정의해보십시오.

- cutZero()라는 함수를 만듭시다. 이 함수는 문자를 하나 입력하면 맨 앞에 '0' 문자가 있으면 제거하고 문자 type으로 return 해줍니다.

- removeDash()라는 함수를 만듭시다. 이 함수는 문자를 하나 입력하면 대시기호 '-' 가 있으면 전부 제거해주고 그걸 숫자 type으로 return 해줍니다. 

- 함수에 타입지정시 type alias를 꼭 써보도록 합시다. 

물론 문자제거 하는 방법을 모른다면 구글검색이 필요합니다. 
*/

type Cutzero = (x: string) => string;
let cutZero :Cutzero = function(x) {
    if(x[0] == '0'){
        return x.slice(1)
    }else{
        return x
    }
}

type Removedash = (x: string ) => number;
let removeDash:Removedash = function(x) {
    let result = x.replace(/-/g,"");
    return parseFloat(result)
}



/*
(숙제3) 함수에 함수를 집어넣고 싶습니다.

숙제2에서 만든 함수들을 파라미터로 넣을 수 있는 함수를 제작하고 싶은 것입니다. 

이 함수는 파라미터 3개가 들어가는데 첫째는 문자, 둘째는 함수, 셋째는 함수를 집어넣을 수 있습니다. 이 함수를 실행하면

1. 첫째 파라미터를 둘째 파라미터 (함수)에 파라미터로 집어넣어줍니다.

2. 둘째 파라미터 (함수)에서 return된 결과를 셋째 파라미터(함수)에 집어넣어줍니다.

3. 셋째 파라미터 (함수)에서 return된 결과를 콘솔창에 출력해줍니다. 

이 함수는 어떻게 만들면 될까요?

둘째 파라미터엔 cutZero, 셋째 파라미터엔 removeDash 라는 함수들만 입력할 수 있게 파라미터의 타입도 지정해봅시다.
*/
interface Student {name : string}
interface Teacher {
    name:string,
    age : number,
}

let 학생 : Student = {name : 'kim'}
let 선생 : Teacher = {name : 'kim', age : 20}




type Car = {
    wheel : '4개',
    color : string
  }
  type Bike = {
    wheel : '2개',
    color : string
  }
  
  function 함수(x : Car | Bike){
    if (x.wheel === '4개'){
      console.log('이 차의 바퀴 갯수는 ' + x.wheel +'개 입니다.')
    } else {
      console.log('이 차의 바퀴 갯수는 ' + x.wheel +'개 입니다.')
    }
  }

class Users {
 private static x = 10;
 public static y = 20;

 addOne(a : number) : number{
    return Users.x + a
 }
}

class Square{

    constructor(public width: number, public height: number, public color: string){
    }

    draw(){
        let a = Math.random();
        let square = `<div style="position: relative;
        top:${a * 400}px;
        let:${a * 400}px;
        width:${this.width}px;
        height:${this.height}px;
        background:${this.color}"></div>`;
        document.body.insertAdjacentHTML('beforeend', square);
    }
}

let 네모 = new Square(30,30, 'red');

/// <reference path="./type.ts" />

let car : Behicle.Car = {
    wheel : 4,
    model : "genesis",
}




function showLength<Type extends string | string[]>(x :Type){
return x.length
}

showLength('hellow')


interface Animal {
    name : string;
    age : number 
  }
  
let data = '{"name" : "dog", "age" : 1 }'

function jsonParse<Animal extends string>(x : Animal){
return JSON.parse(x)
}

class Person<Type>{
    name;
    constructor(a: Type){
        this.name = a;
    }
}
let a= new Person('어쩌구');
a.name
