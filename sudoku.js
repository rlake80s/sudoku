const gridWidth = 9;
const gridHeight = 9;

const blankTile = '';

const countToNineArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const legalMoveRetries = 5;

// initialize the maze as an empty grid
let board = [];
let defaultRow = Array(gridWidth).fill(blankTile)

for (let i = 0; i < gridHeight; i++) {
  let newRow = Object.assign([], defaultRow);
  board.push(newRow);
}

let availableBoardTiles = [];
for (let i = 0; i < gridHeight; i++) {
  for (let k = 0; k < gridWidth; k++) {
    availableBoardTiles.push([i, k])
  }
}


// left side grids
const topLeftGridTopRow = [
  [0, 0],
  [0, 1],
  [0, 2]
]
const topLeftGridMiddleRow = [
  [1, 0],
  [1, 1],
  [1, 2]
]
const topLeftGridBottomRow = [
  [2, 0],
  [2, 1],
  [2, 2]
]
// top, then middle, then bottom
const topLeftGrid = [topLeftGridTopRow, topLeftGridMiddleRow, topLeftGridBottomRow].flat()

const middleLeftGridTopRow = [
  [3, 0],
  [3, 1],
  [3, 2]
]
const middleLeftGridMiddleRow = [
  [4, 0],
  [4, 1],
  [4, 2]
]
const middleLeftGridBottomRow = [
  [5, 0],
  [5, 1],
  [5, 2]
]
// top, then middle, then bottom
const middleLeftGrid = [middleLeftGridTopRow, middleLeftGridMiddleRow, middleLeftGridBottomRow].flat()

const bottomLeftGridTopRow = [
  [6, 0],
  [6, 1],
  [6, 2]
]
const bottomLeftGridMiddleRow = [
  [7, 0],
  [7, 1],
  [7, 2]
]
const bottomLeftGridBottomRow = [
  [8, 0],
  [8, 1],
  [8, 2]
]
// top, then middle, then bottom
const bottomLeftGrid = [bottomLeftGridTopRow, bottomLeftGridMiddleRow, bottomLeftGridBottomRow].flat()

// middle grids
const topMiddleGridTopRow = [
  [0, 3],
  [0, 4],
  [0, 5]
]
const topMiddleGridMiddleRow = [
  [1, 3],
  [1, 4],
  [1, 5]
]
const topMiddleGridBottomRow = [
  [2, 3],
  [2, 4],
  [2, 5]
]
// top, then middle, then bottom
const topMiddleGrid = [topMiddleGridTopRow, topMiddleGridMiddleRow, topMiddleGridBottomRow].flat()

const middleMiddleGridTopRow = [
  [3, 3],
  [3, 4],
  [3, 5]
]
const middleMiddleGridMiddleRow = [
  [4, 3],
  [4, 4],
  [4, 5]
]
const middleMiddleGridBottomRow = [
  [5, 3],
  [5, 4],
  [5, 5]
]
// top, then middle, then bottom
const middleMiddleGrid = [middleMiddleGridTopRow, middleMiddleGridMiddleRow, middleMiddleGridBottomRow].flat()

const bottomMiddleGridTopRow = [
  [6, 3],
  [6, 4],
  [6, 5]
]
const bottomMiddleGridMiddleRow = [
  [7, 3],
  [7, 4],
  [7, 5]
]
const bottomMiddleGridBottomRow = [
  [8, 3],
  [8, 4],
  [8, 5]
]
// top, then middle, then bottom
const bottomMiddleGrid = [bottomMiddleGridTopRow, bottomMiddleGridMiddleRow, bottomMiddleGridBottomRow].flat()

// right side grids
const topRightGridTopRow = [
  [0, 6],
  [0, 7],
  [0, 8]
]
const topRightGridMiddleRow = [
  [1, 6],
  [1, 7],
  [1, 8]
]
const topRightGridBottomRow = [
  [2, 6],
  [2, 7],
  [2, 8]
]
// top, then middle, then bottom
const topRightGrid = [topRightGridTopRow, topRightGridMiddleRow, topRightGridBottomRow].flat()

const middleRightGridTopRow = [
  [3, 6],
  [3, 7],
  [3, 8]
]
const middleRightGridMiddleRow = [
  [4, 6],
  [4, 7],
  [4, 8]
]
const middleRightGridBottomRow = [
  [5, 6],
  [5, 7],
  [5, 8]
]
// top, then middle, then bottom
const middleRightGrid = [middleRightGridTopRow, middleRightGridMiddleRow, middleRightGridBottomRow].flat()

const bottomRightGridTopRow = [
  [6, 6],
  [6, 7],
  [6, 8]
]
const bottomRightGridMiddleRow = [
  [7, 6],
  [7, 7],
  [7, 8]
]
const bottomRightGridBottomRow = [
  [8, 6],
  [8, 7],
  [8, 8]
]
// top, then middle, then bottom
const bottomRightGrid = [bottomRightGridTopRow, bottomRightGridMiddleRow, bottomRightGridBottomRow].flat()

// rows
const firstRow = [
  [0, 0],
  [0, 1],
  [0, 2],
  [0, 3],
  [0, 4],
  [0, 5],
  [0, 6],
  [0, 7],
  [0, 8]
]
const secondRow = [
  [1, 0],
  [1, 1],
  [1, 2],
  [1, 3],
  [1, 4],
  [1, 5],
  [1, 6],
  [1, 7],
  [1, 8]
]
const thirdRow = [
  [2, 0],
  [2, 1],
  [2, 2],
  [2, 3],
  [2, 4],
  [2, 5],
  [2, 6],
  [2, 7],
  [2, 8]
]
const fourthRow = [
  [3, 0],
  [3, 1],
  [3, 2],
  [3, 3],
  [3, 4],
  [3, 5],
  [3, 6],
  [3, 7],
  [3, 8]
]
const fifthRow = [
  [4, 0],
  [4, 1],
  [4, 2],
  [4, 3],
  [4, 4],
  [4, 5],
  [4, 6],
  [4, 7],
  [4, 8]
]
const sixthRow = [
  [5, 0],
  [5, 1],
  [5, 2],
  [5, 3],
  [5, 4],
  [5, 5],
  [5, 6],
  [5, 7],
  [5, 8]
]
const seventhRow = [
  [6, 0],
  [6, 1],
  [6, 2],
  [6, 3],
  [6, 4],
  [6, 5],
  [6, 6],
  [6, 7],
  [6, 8]
]
const eighthRow = [
  [7, 0],
  [7, 1],
  [7, 2],
  [7, 3],
  [7, 4],
  [7, 5],
  [7, 6],
  [7, 7],
  [7, 8]
]
const ninthRow = [
  [8, 0],
  [8, 1],
  [8, 2],
  [8, 3],
  [8, 4],
  [8, 5],
  [8, 6],
  [8, 7],
  [8, 8]
]

// columns
const firstColumn = [
  [0, 0],
  [1, 0],
  [2, 0],
  [3, 0],
  [4, 0],
  [5, 0],
  [6, 0],
  [7, 0],
  [8, 0]
]
const secondColumn = [
  [0, 1],
  [1, 1],
  [2, 1],
  [3, 1],
  [4, 1],
  [5, 1],
  [6, 1],
  [7, 1],
  [8, 1]
]
const thirdColumn = [
  [0, 2],
  [1, 2],
  [2, 2],
  [3, 2],
  [4, 2],
  [5, 2],
  [6, 2],
  [7, 2],
  [8, 2]
]
const fourthColumn = [
  [0, 3],
  [1, 3],
  [2, 3],
  [3, 3],
  [4, 3],
  [5, 3],
  [6, 3],
  [7, 3],
  [8, 3]
]
const fifthColumn = [
  [0, 4],
  [1, 4],
  [2, 4],
  [3, 4],
  [4, 4],
  [5, 4],
  [6, 4],
  [7, 4],
  [8, 4]
]
const sixthColumn = [
  [0, 5],
  [1, 5],
  [2, 5],
  [3, 5],
  [4, 5],
  [5, 5],
  [6, 5],
  [7, 5],
  [8, 5]
]
const seventhColumn = [
  [0, 6],
  [1, 6],
  [2, 6],
  [3, 6],
  [4, 6],
  [5, 6],
  [6, 6],
  [7, 6],
  [8, 6]
]
const eighthColumn = [
  [0, 7],
  [1, 7],
  [2, 7],
  [3, 7],
  [4, 7],
  [5, 7],
  [6, 7],
  [7, 7],
  [8, 7]
]
const ninthColumn = [
  [0, 8],
  [1, 8],
  [2, 8],
  [3, 8],
  [4, 8],
  [5, 8],
  [6, 8],
  [7, 8],
  [8, 8]
]

const allGrids = [
  topLeftGrid, middleLeftGrid, bottomLeftGrid, topMiddleGrid, middleMiddleGrid, bottomMiddleGrid,
  topRightGrid, middleRightGrid, bottomRightGrid,
  firstRow, secondRow, thirdRow, fourthRow, fifthRow, sixthRow, seventhRow, eighthRow, ninthRow,
  firstColumn, secondColumn, thirdColumn, fourthColumn, fifthColumn, sixthColumn, seventhColumn, eighthColumn, ninthColumn
]

function clone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

function isGridComplete(grid) {
  let countToNine = clone(countToNineArray);

  for (coordinates of grid) {
    let tile = board[coordinates[0]][coordinates[1]];
    let index = countToNine.indexOf(tile);

    if (index < 0) {
      break;
    }

    countToNine.splice(index, 1);
  }

  return countToNine.length === 0;
}

function isBoardComplete() {
  for (grid of allGrids) {
    if (!isGridComplete(grid)) {
      return false;
    }
  }
  return true;
}

function getRowPosition(row) {
  const topRows = [0, 1, 2];
  const middleRows = [3, 4, 5];
  const bottomRows = [6, 7, 8];

  if (topRows.includes(row)) {
    return "top";
  } else if (middleRows.includes(row)) {
    return "middle";
  } else if (bottomRows.includes(row)) {
    return "bottom";
  }
}

function getColumnPosition(column) {
  const leftColumns = [0, 1, 2];
  const middleColumns = [3, 4, 5];
  const rightColumns = [6, 7, 8];

  if (leftColumns.includes(column)) {
    return "Left";
  } else if (middleColumns.includes(column)) {
    return "Middle";
  } else if (rightColumns.includes(column)) {
    return "Right";
  }
}

function getGridValues(grid) {
  let gridValues = [];

  for (coordinates of grid) {
    gridValues.push(board[coordinates[0]][coordinates[1]])
  }
  return gridValues;
}

function getGridQuadrantName(coordinates) {
  let row = coordinates[0];
  let column = coordinates[1];

  let rowPos = getRowPosition(row);
  let columnPos = getColumnPosition(column);

  let gridString = rowPos + columnPos + "Grid";

  return gridString;
}

function getQuadrantGridValues(coordinates) {
  let grid = eval(getGridQuadrantName(coordinates));

  return getGridValues(grid);
}

function getRowGridValues(row) {
  const rowGrids = [firstRow, secondRow, thirdRow, fourthRow, fifthRow, sixthRow, seventhRow, eighthRow, ninthRow]

  let grid = rowGrids[row];
  return getGridValues(grid);
}

function getColumnGridValues(column) {
  const columnGrids = [firstColumn, secondColumn, thirdColumn, fourthColumn, fifthColumn, sixthColumn, seventhColumn, eighthColumn, ninthColumn]

  let grid = columnGrids[column];
  return getGridValues(grid);
}

function containsDuplicates(array) {
  for (item of array) {
    let dupesArray = array.filter(e => e === item)
    if (dupesArray.length > 1) {
      return true;
    }
  }
  return false;
}

function getGridsValues(coordinates) {
  let row = coordinates[0];
  let column = coordinates[1];

  let quadrantGrid = getQuadrantGridValues(coordinates);
  let rowGrid = getRowGridValues(row);
  let columnGrid = getColumnGridValues(column);

  return [quadrantGrid, rowGrid, columnGrid];
}

function isMoveIllegal(coordinates) {
  let grids = getGridsValues(coordinates);

  // this could definitely be smarter
  // like there are multiple ways to determine if a play is illegal in sudoku beyond
  // this simplistic approach (eg. the above row may force a 9 into a certain grid which makes the placement of the 9 in the below row in the same grid illegal)

  // additionally, getting a list of all legal moves for a tile might be the way to build the random board:
  // get the list of legal moves, and then randomly select one
  // if legal moves in 0, then start over or go back x moves and try again

  for (grid of grids) {
    if (containsDuplicates(grid)) {
      return true;
    }
  }
  return false;
}

function getPossibleLegalNumbers(coordinates) {
  let countToNine = clone(countToNineArray);
  let possibleNums = [];

  let [quadrantGrid, rowGrid, columnGrid] = getGridsValues(coordinates);

  possibleNums = countToNine.filter(e => !quadrantGrid.includes(e))
  possibleNums = possibleNums.filter(e => !rowGrid.includes(e))
  possibleNums = possibleNums.filter(e => !columnGrid.includes(e))

  return possibleNums;
  // should make smarter afterwards for additional constraints such as above
}

function coordinatesEqual(a, b) {
  let a1 = a[0];
  let a2 = a[1];
  let b1 = b[0];
  let b2 = b[1];

  return a1 === b1 && a2 === b2;
}

function getAvailabilityIndex(coordinates) {
  for (let i = 0; i < availableBoardTiles.length; i++) {
    if (coordinatesEqual(coordinates, availableBoardTiles[i])) {
      return i;
    }
  }
}

function removeFromAvailabilityBoard(coordinates) {
  let index = getAvailabilityIndex(coordinates);
  availableBoardTiles.splice(index, 1);
}

function getNextOpenTile() {
  return availableBoardTiles[Math.floor(Math.random() * availableBoardTiles.length)];
}

function getAdjacentGrids(coordinates) {
  const defaultGridObject = {
    topLeft: '',
    topMiddle: '',
    topRight: '',
    middleLeft: '',
    middleMiddle: '',
    MiddleRight: '',
    bottomLeft: '',
    bottomMiddle: '',
    bottomRight: '',
  }

  const adjacentGrids = {
    'topLeftGrid': {
      horizontal: [topMiddleGrid, topRightGrid],
      vertical: [middleLeftGrid, bottomLeftGrid]
    },
    'middleLeftGrid': {
      horizontal: [middleMiddleGrid, middleRightGrid],
      vertical: [topLeftGrid, bottomLeftGrid]
    },
    'bottomLeftGrid': {
      horizontal: [bottomMiddleGrid, bottomRightGrid],
      vertical: [topLeftGrid, middleLeftGrid]
    },
    'topMiddleGrid': {
      horizontal: [topLeftGrid, topRightGrid],
      vertical: [middleMiddleGrid, bottomMiddleGrid]
    },
    'middleMiddleGrid': {
      horizontal: [middleLeftGrid, middleRightGrid],
      vertical: [topMiddleGrid, bottomMiddleGrid]
    },
    'bottomMiddleGrid': {
      horizontal: [bottomLeftGrid, bottomRightGrid],
      vertical: [topMiddleGrid, middleMiddleGrid]
    },
    'topRightGrid': {
      horizontal: [topLeftGrid, topMiddleGrid],
      vertical: [middleRightGrid, bottomRightGrid]
    },
    'middleRightGrid': {
      horizontal: [middleLeftGrid, middleMiddleGrid],
      vertical: [topRightGrid, bottomRightGrid]
    },
    'bottomRightGrid': {
      horizontal: [bottomLeftGrid, bottomMiddleGrid],
      vertical: [topRightGrid, middleRightGrid]
    }
  }

  let gridName = getGridQuadrantName(coordinates);

  let adjacentGridsPrototype = adjacentGrids[gridName];
  let currentAdjacentGrids = {
    horizontal: [{}, {}],
    vertical: [{}, {}]
  }

  let index = 0;

  for (property in defaultGridObject) {
    currentAdjacentGrids.horizontal[0][property] = adjacentGridsPrototype.horizontal[0][index]
    currentAdjacentGrids.horizontal[1][property] = adjacentGridsPrototype.horizontal[1][index]
    currentAdjacentGrids.vertical[0][property] = adjacentGridsPrototype.vertical[0][index]
    currentAdjacentGrids.vertical[1][property] = adjacentGridsPrototype.vertical[1][index]
    index++;
  }
  return currentAdjacentGrids;
}

function setNextNumber() {
  let nextOpenTile = getNextOpenTile();
  let tileValue;

  // should select the number, then check adjacent grids for possible moves with the number placed and make sure that we haven't broken ourselves

  let possibleMoves = getPossibleLegalNumbers(nextOpenTile);

  for (let i = 0; i < legalMoveRetries; i++) {
    let move = possibleMoves[Math.floor(Math.random() * possibleMoves.length)];

    // set move to clone of board to check if move is breaking
    let boardCopy = clone(board);
    boardCopy[nextOpenTile[0]][nextOpenTile[1]] = move;

    let adjacentGrids = getAdjacentGrids(nextOpenTile);
    
    // how to check adjacent grids?
    // enough to iterate through open tiles and ensure that existing set tiles + open tile option can complete grid?
    // this seems incomplete and the reality is much more subtle -- brute force approach would be to try and fill all the tiles in all the grids and then clawback if an error
    // what would a more subtle approach look like?

    
  }




}

console.log(board);
console.log(availableBoardTiles);
