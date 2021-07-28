class Todo {
    //타입스크립트는 이와 같이 클래스를 선언한다. 
    id:string;
    text: string;

    constructor(todoText: string){
        this.text = todoText;
        this.id = new Date().toISOString();
    }
}

export default Todo;