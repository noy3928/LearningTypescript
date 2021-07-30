// Code goes here!
class Department {
    // public name: string; //이것은 클래스의 필드라고 불린다. | public타입은 바깥에서도 이 값에 접근할 수 있게 한다. 
    private employees:string[] = []; // private는 클래스 내부에서는 값을 사용할 수 있게 한다. 

    //파라미터에서부터 private와 public을 선언할 수 있다. | readonly는 값을 선언하고 난 이후에는 다시 값을 변경할 수 없다. 
    constructor(private readonly id:string, public name : string){
        // this.name = n; 
        // this.id = id;
    }

    describe(this: Department) {
        console.log(`Department(${this.id}): ${this.name}  `+ this.name );
    }

    addEmployee(employee: string){
        this.employees.push(employee);
    }

    printEmployeeInformation(){
        console.log(this.employees.length);
        console.log(this.employees)
    }
}

const accounting = new Department('Accounting');

accounting.addEmployee('Max');
accounting.addEmployee('Manu')

// accounting.employees[2] = 'Anna'; //private으로 등록하기 전까지는 밖에서 값을 넣을 수 잇었지만, private 이후에는 밖에서 값을 등록할 수 없어진다. 
accounting.name = 'NEW'//이것은 퍼블릭 타입에 의해서 가능해 진 것이다. 사실은 이것이 기본값이기도 하다. 

accounting.describe();
accounting.printEmployeeInformation();



// const accountingCopy = {name: 's', describe: accounting.describe};
// accountingCopy.describe() //describe의 this에 Department 타입을 넣으면 인스턴스를 생성할 때에도, 그 클래스의 형식을 맞춰줘야한다. 

