const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const btnTry = document.querySelector("#btnTry");
const btnReset = document.querySelector("#btnReset");

// An array with lucky texts
const fortunes = [
  "If someone is so tired that they can't give you a smile, give them yours.",
  "Act now, for tomorrow might be too late.",
  "Good things come to those who wait.",
  "Your happiness is intertwined with your outlook on life.",
  "New ideas could elevate your life today.",
  "You will be surrounded by luxury soon.",
  "Your greatest dreams are within your reach.",
  "Trust your intuition; it’s guiding you to the right path.",
];

// Events
btnTry.addEventListener("click", handleLuckyClick);
btnReset.addEventListener("click", handleResetClick);
document.addEventListener("keydown", pressEnter);

//Functions
function handleLuckyClick(event) {
  event.preventDefault(); // It will prevent the default, from happening

  const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];

  const luckyTextContainer = document.querySelector("#lucky-text p");
  luckyTextContainer.textContent = randomFortune;

  toggleScreen();
}

function handleResetClick(event) {
  event.preventDefault();

  toggleScreen();
}

function toggleScreen() {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
}

function pressEnter(enter){
  if (enter.key == "Enter" && screen1.classList.contains("hide")) {
    handleResetClick(enter);
  }
}
