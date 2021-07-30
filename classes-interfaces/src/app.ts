// Code goes here!
class Department {
    name: string; //이것은 클래스의 필드라고 불린다. 

    constructor(n : string){
        this.name = n; 
    }

    describe(this: Department) {
        console.log('Department: ' + this.name );
    }

}

const accounting = new Department('Accounting');

accounting.describe();

const accountingCopy = {name: 's', describe: accounting.describe};
accountingCopy.describe() //describe의 this에 Department 타입을 넣으면 인스턴스를 생성할 때에도, 그 클래스의 형식을 맞춰줘야한다. 