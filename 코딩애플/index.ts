
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