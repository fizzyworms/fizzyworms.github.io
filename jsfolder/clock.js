const clock = document.getElementById("clock");

function handleClock() {
  const time = new Date();
  const hour = time.getHours().toString().padStart(2, "0");
  const min = time.getMinutes().toString().padStart(2, "0");
  const sec = time.getSeconds().toString().padStart(2, "0");

  clock.innerText = `Time: ${hour}:${min}:${sec}`;
}

handleClock();
setInterval(handleClock, 1000);
