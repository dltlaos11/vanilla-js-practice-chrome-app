const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"

let toDos = []; 

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
    // array를 stringify 하는 것 배열이 문자열로
    // JSON.parse하면 [1,2,3,4] 배열로 다시 원상 복귀

}

function deleteToDo(event) {
    const li = event.target.parentElement;
    // target은 button인데 부모를 갖고있음 그 부모에 접근할 수 잇고 
    // 삭제가 가능 !
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); 
    // 선택된 것들과 다른 것들을 남겨 놓는다 .
    saveToDos();
}
// 어떤 것을 눌렀을때 확인 가능함 ! event를 사용할 것 !!
// function -> event, console.log -> dir !!

function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.addEventListener("click", deleteToDo);
    button.innerText="❌";
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}
// 원하는 태그에 js를 사용하여 넣을 수 있음.

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value ="";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}
// 입력받은 event에 대해서 

toDoForm.addEventListener("submit", handleToDoSubmit);


const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
    //parsedToDos.forEach((item) => {console.log("this", item)});
    // arrow function
}
// forEach 함수는 paintToDo를 parsedToDos 배열의 요소마다 실행.

//function sayHello (item) {
//    console.log("hhhh");
//}
//==
//(item) => {console.log("hhh", item)};

