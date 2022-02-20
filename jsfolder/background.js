const imges = ["1.jpg", "2.jpg"];

const randomImg = imges[Math.floor(Math.random() * imges.length)];

const img = document.createElement("img"); // img 태그 만들기

img.src = `img/${randomImg}`;

document.body.append(img);
