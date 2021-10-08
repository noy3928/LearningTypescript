
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