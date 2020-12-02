let state = "waiting";
let targetLabel = "none";
document.getElementById("clickedState").innerHTML = state;
document.getElementById("btnPUP").addEventListener("click", pupClicked);
document.getElementById("btnPDOWN").addEventListener("click", pdownClicked);
document.getElementById("btnFinish").addEventListener("click", finishClicked);

function pupClicked() {
  targetLabel = "pushUp";
  document.getElementById("clickedExercise").innerHTML = "PUSH UP";

  setTimeout(() => {
    state = "collecting";
    document.getElementById("clickedState").innerHTML = state;
    setTimeout(function () {
      console.log("not collecting");
      state = "waiting";
      document.getElementById("clickedState").innerHTML = state;
    }, 80);
  }, 80);
}

function pdownClicked() {
  targetLabel = "pushDown";
  document.getElementById("clickedExercise").innerHTML = "PUSH DOWN";
  setTimeout(() => {
    state = "collecting";
    document.getElementById("clickedState").innerHTML = state;
    setTimeout(function () {
      console.log("not collecting");
      state = "waiting";
      document.getElementById("clickedState").innerHTML = state;
    }, 80);
  }, 80);
}

function finishClicked() {
  document.getElementById("clickedExercise").innerHTML = "NO EXERCISE";
  state = "finish";
}
