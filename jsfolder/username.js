const loginForm = document.getElementById("loginForm");
const loginInput = document.getElementById("loginInput");
const greeting = document.getElementById("greeting");

function login(event) {
  event.preventDefault();
  loginForm.classList.add("hidden"); // 로그인폼 숨기기
  const username = loginInput.value;
  localStorage.setItem("username", username);
  printGreeting(username);
}

function printGreeting(username) {
  greeting.innerText = `${username}'s Todo list`;
  greeting.classList.remove("hidden");
}

// // 새로고침해도 유저명 가져오기
const savedName = localStorage.getItem("username");

if (savedName === null) {
  // data type과 값이 모두 같은지 비교
  loginForm.classList.remove("hidden"); // 로그인폼 보여주기
  loginForm.addEventListener("submit", login);
} else {
  printGreeting(savedName);
}
