const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    // 자바스크립트 함수는 호출하면서 인자를 주는데 그 인자에는
    // event에 관한 정보들이 담겨있음.
    event.preventDefault();
    // 브라우저의 기본동작을 막아주고 그 동작은 페이지 새로고침
    loginForm.classList.add(HIDDEN_CLASSNAME);
    // form을 hidden class로 숨기기
    //const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, loginInput.value); 
    // username 값을 username이라는 key와 함께 localStage에 저장
    paintGreetings();
}

// text 변경 후 hidden class 제거 
function paintGreetings(){
    const username = localStorage.getItem(USERNAME_KEY);
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

// localStorage에서 값 가져오기
const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null){
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);

} else {
    // show the greetings
    paintGreetings();
}
