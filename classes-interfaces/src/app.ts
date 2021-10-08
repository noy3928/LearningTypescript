// Code goes here!
class Department {
    // public name: string; //이것은 클래스의 필드라고 불린다. | public타입은 바깥에서도 이 값에 접근할 수 있게 한다. 
    // private employees:string[] = []; // private는 클래스 내부에서는 값을 사용할 수 있게 한다. 
    protected employees:string[] = []; // protected는 이 클래스 안에서만 가능할 뿐 아니라, 다른 상속받은 클래스 안에서도 사용이 가능하다.

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

//extends를 활용하면 기존의 class의 속성들을 가져와서 사용할 수 있다. 
class ITDepartment extends Department {
    admins: string[];
    constructor(id: string, admins: string[]) {
        super(id, 'IT');
        this.admins = admins
    }
}

class AccountingDepartment extends Department{
    private lastReport : string;

    get mostRecentReport() {
        if(this.lastReport){
            return this.lastReport;
        }
        throw new Error('No report found.')
    }

    //세터를 이렇게 선언해두고나면 나중에 = 방식으로 할당하면 그것이 바로 사용법이 된다. 
    set mostRecentReport(value: string) {
        if(!value){
            throw new Error('Please pass in a valid value!')
        }
        this.addReport(value);
    }

    constructor(id:string, private reports: string[]){
        super(id, 'Accounting');
        this.lastReport = reports[0];
    }

    //상속받은 클래스에서 해당 값을 protect로 한 덕분에 사용할 수 있는 값이다.
    addEmployee(name: string){
        if(name === 'Max'){
            return;
        }
        this.employees.push(name);
    }

    addReport(text: string){
        this.reports.push(text);
        this.lastReport = text;
    }

    getReports(){
        console.log(this.reports)
    }
}

const accounting = new AccountingDepartment('d2',[]);

//이것이 세터를 사용하는 방법이다. 
accounting.mostRecentReport = ''

accounting.addEmployee('Max');
accounting.addEmployee('Manu')

// accounting.employees[2] = 'Anna'; //private으로 등록하기 전까지는 밖에서 값을 넣을 수 잇었지만, private 이후에는 밖에서 값을 등록할 수 없어진다. 
accounting.name = 'NEW'//이것은 퍼블릭 타입에 의해서 가능해 진 것이다. 사실은 이것이 기본값이기도 하다. 

accounting.describe();
accounting.printEmployeeInformation();


// const accountingCopy = {name: 's', describe: accounting.describe};
// accountingCopy.describe() //describe의 this에 Department 타입을 넣으면 인스턴스를 생성할 때에도, 그 클래스의 형식을 맞춰줘야한다. 

