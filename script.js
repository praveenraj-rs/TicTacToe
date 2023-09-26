const boardCell = document.querySelectorAll(".cell");
let nextTurn = true;
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

function startGame() {
  let nextTurn = true;
  boardCell.forEach((cell) => {
    cell.addEventListener("click", handleClick, { once: true });
  });
}

startGame();

function handleClick(cell) {
  const inCell = cell.target;
  let currentClass = nextTurn ? "x" : "circle";
  placeMark(inCell, currentClass);
  if (checkWin(currentClass)) {
    document.querySelector(".result h2").innerText = currentClass + " has won";
    return;
  }

  swapMark();
}

function placeMark(inCell, currentClass) {
  inCell.classList.add(currentClass);
}

function swapMark() {
  nextTurn = !nextTurn;
}

function checkWin(currentClass) {
  return winCombination.some((combination) => {
    return combination.every((index) => {
      return boardCell[index].classList.contains(currentClass);
    });
  });
}
