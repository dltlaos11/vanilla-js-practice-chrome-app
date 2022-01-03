const clock = document.querySelector("#clock");

// function sayHello() {
//     console.log("hello");
// }
//setInterval(sayHello, 5000);
// 간격을 표시 ! 5초

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}
// 01, 02 만들기 위해서 padStart, padEnd 사용 (최대길이, '표시할문자')

getClock();
// 버퍼링을 없애기 위해 setInterval전에 바로함수 호출
setInterval(getClock, 1000);