const password = document.getElementById("password");
const background = document.getElementById("background");
const progressDone = document.querySelector(".progress-done");
const progress = document.querySelector(".progress");

password.addEventListener("input", (e) => {
  const input = e.target.value;
  const length = input.length;
  const blurValue = 20 - length * 2;
  let percentage = 100 - blurValue * 5;
  background.style.filter = `blur(${blurValue}px)`;
  progressDone.innerHTML = `${percentage}` + "%";
  progressDone.style.opacity = 1;

  if (percentage >= 100) {
    progressDone.style.background = "green";
    progressDone.style.width = 100 + "%";
    progressDone.innerHTML = 100 + "%";
  } else if (percentage == 0) {
    progressDone.style.opacity = 0;
    progress.style.opacity = 0;
  } else {
    progressDone.style.width = `${percentage}` + "%";
    progressDone.style.background = "red";
    progress.style.opacity = 1;
  }
});
