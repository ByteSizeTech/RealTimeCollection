let state = "waiting";
let targetLabel = "none";
document.getElementById("clickedState").innerHTML = state;
document.getElementById("btnStand").addEventListener("click", standClicked);
document.getElementById("btnWallsit").addEventListener("click", wallsitClicked);

document.getElementById("btnPlank").addEventListener("click", plankClicked);
document.getElementById("btnFinish").addEventListener("click", finishClicked);

function standClicked() {
  targetLabel = "stand";
  document.getElementById("clickedExercise").innerHTML = "STAND";

  setTimeout(() => {
    state = "collecting";
    document.getElementById("clickedState").innerHTML = state;
    setTimeout(function () {
      console.log("not collecting");
      state = "waiting";
      document.getElementById("clickedState").innerHTML = state;
    }, 10);
  }, 2000);
}

function plankClicked() {
  targetLabel = "plank";
  document.getElementById("clickedExercise").innerHTML = "PLANK";
  setTimeout(() => {
    state = "collecting";
    document.getElementById("clickedState").innerHTML = state;
    setTimeout(function () {
      console.log("not collecting");
      state = "waiting";
      document.getElementById("clickedState").innerHTML = state;
    }, 50);
  }, 50);
}
function wallsitClicked() {
  targetLabel = "wallsit";
  document.getElementById("clickedExercise").innerHTML = "WALLSIT";
  setTimeout(() => {
    state = "collecting";
    document.getElementById("clickedState").innerHTML = state;
    setTimeout(function () {
      console.log("not collecting");
      state = "waiting";
      document.getElementById("clickedState").innerHTML = state;
    }, 50);
  }, 50);
}
function finishClicked() {
  document.getElementById("clickedExercise").innerHTML = "NO EXERCISE";
  state = "finish";
}
