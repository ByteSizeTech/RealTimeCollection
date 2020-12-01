let state = "waiting";
let targetLabel = "none";
document.getElementById("clickedState").innerHTML = state;
document.getElementById("btnSUP").addEventListener("click", supClicked);
document.getElementById("btnSDOWN").addEventListener("click", sdownClicked);
document.getElementById("btnFinish").addEventListener("click", finishClicked);

function supClicked() {
  targetLabel = "squatUp";
  document.getElementById("clickedExercise").innerHTML = "SQUAT UP";

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

function sdownClicked() {
  targetLabel = "squatDown";
  document.getElementById("clickedExercise").innerHTML = "SQUAT DOWN";
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
