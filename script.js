const startBtn = document.querySelector(".start-btn");
const selectBlock = document.querySelector("#chose-block");

const displayTimer = document.querySelector(".timer");
const cycleSec = document.querySelector(".cycle-section");

let isRunning = true;
let cycleList = [];
let countOfCycles = 0;

let countBlock = 0;
// countdown
function reset() {
  startBtn.style.display = "block";
  countBlock = 0;
  isRunning = true;
  displayTimer.innerHTML = "timer";
  selectBlock.options[1].disabled = true;
  selectBlock.selectedIndex = 0;
}

function countDown(value) {
  console.log(value);
  if (isRunning) {
    countBlock += 1;
    const val = setInterval(() => {
      startBtn.style.display = "none";
      isRunning = false;
      value -= 1;
      displayTimer.innerHTML = value;
      if (value === 0) {
        console.log(countBlock);
        startBtn.style.display = "block";
        clearInterval(val);
        displayTimer.innerHTML = "success";
        if (countBlock == 2) {
          countOfCycles += 1;
          cycleList.push(countOfCycles);
          console.log(cycleList);
          cycleSec.innerHTML += `<p>\cycle ${countOfCycles} is completed</p>`;
          reset();
        }
        if (countBlock === 1) {
          isRunning = true;
          selectBlock.selectedIndex = 1;
          selectBlock.options[1].disabled = false;
        }
      }
    }, 1000);
  }
}

startBtn.addEventListener("click", () => {
  console.log(selectBlock.value);

  countDown(parseInt(selectBlock.value));
});
