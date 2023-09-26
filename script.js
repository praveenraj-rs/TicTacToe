const boardCell = document.querySelectorAll(".cell");
let nextTurn = true;
let stop = false;
const winCombination = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

startGame();

function startGame() {
  boardCell.forEach((cell) => {
    // Helps clearing the TicTacToe boxes(1-3 lines for restart)
    cell.classList.remove("x");
    cell.classList.remove("circle");
    document.querySelector(".result h2").innerText = "Result";
    stop=false

    // Marking, Checking Wins, Checking Draw, Switch Marking
    cell.addEventListener("click", handleClick, { once: true });
  });
}

function handleClick(cell) {
  const inCell = cell.target;
  let currentClass = nextTurn ? "x" : "circle";
  if(!stop){
  placeMark(inCell, currentClass);}

  if (checkWin(currentClass)) {
    endGame(false);
    stop=true  
  } else if (isDraw()) {
    endGame(true);
  } else {
    swapMark();
  }
}

function placeMark(inCell, currentClass) {
  inCell.classList.add(currentClass);
}

function checkWin(currentClass) {
  return winCombination.some((combination) => {
    return combination.every((index) => {
      return boardCell[index].classList.contains(currentClass);
    });
  });
}

function isDraw() {
  return [...boardCell].every((cell) => {
    return cell.classList.contains("x") || cell.classList.contains("circle");
  });
}

function swapMark() {
  nextTurn = !nextTurn;
}

function endGame(draw) {
  if (draw) {
    document.querySelector(".result h2").innerText = "Draw";
  } else {
    document.querySelector(".result h2").innerText = `${
      nextTurn ? "X's" : "O's"
    } Wins`;
  }
}
