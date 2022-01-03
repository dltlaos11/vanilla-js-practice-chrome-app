const images = ["0.jpeg", "1.jpg", "2.jpg", "3.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];



const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);
// appendChild 함수를 사용하여 body에  img태그 추가
//<img src =""/>와 유사, js에서 html 태그를 만든것
// prepend하면 body에서 제일위로 감