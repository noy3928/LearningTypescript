var 내가좋아하는것 = {
    노래제목: '삐삐',
    가수: '아이유',
};
var project = {
    member: ['kim', 'park'],
    days: 12,
    started: true,
};
var 학교 = {
    score: [100, 97, 84],
    teacher: 'Phil',
    friend: 'John',
};
학교.score[4] = false;
학교.friend = ['Lee', 학교.teacher];
function count(x) {
    return x.toString.length;
}
function percentage() { }
var hi = {
    x: '안녕',
    y: 123,
    z: 123,
};
var someoneContact = {
    name: '노예찬',
    phone: 123123,
    email: 'noy3928@naver'
};
var 회원가입 = {
    name: '짱구',
    phone: 123123,
    email: 'noy3928',
    adult: false
};
function 가위바위보(x) {
    return ['가위'];
}
var 회원정보 = {
    name: 'kim',
    age: 30,
    // plusOne : (x : number) => number,
    changeName: function () { },
};
var cutZero = function (x) {
    if (x[0] == '0') {
        return x.slice(1);
    }
    else {
        return x;
    }
};
var removeDash = function (x) {
    var result = x.replace(/-/g, "");
    return parseFloat(result);
};
var 학생 = { name: 'kim' };
var 선생 = { name: 'kim', age: 20 };
function 함수(x) {
    if (x.wheel === '4개') {
        console.log('이 차의 바퀴 갯수는 ' + x.wheel + '개 입니다.');
    }
    else {
        console.log('이 차의 바퀴 갯수는 ' + x.wheel + '개 입니다.');
    }
}
