
const hourSlider = document.getElementById("hourSlider");
const sunMoonIcon = document.getElementById("sunMoonIcon");
const currentHour = new Date().getHours();

for (let i = 0; i < 24; i++) {
  const bar = document.createElement("div");
  bar.classList.add("hour-bar");

  const isDay = i >= 6 && i <= 18;
  bar.classList.add(isDay ? "day" : "night");

  if (i === currentHour) {
    bar.classList.add("current");
    sunMoonIcon.textContent = isDay ? "☀️" : "🌙";
    sunMoonIcon.style.left = `calc(${(i / 24) * 100}% + ${(i / 24) * 10}px)`;
  }

  bar.style.height = `${20 + Math.abs(12 - i) * 4}px`;
  hourSlider.appendChild(bar);
}
