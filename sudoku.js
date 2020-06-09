const gridWidth = 9;
const gridHeight = 9;

const blankTile = 0;

const countToNineArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const maxRetries = 25;
const maxRetriesPerRetry = 15;

const numOfRevealedGameTiles = 35;

// initialize the board as an empty grid
function initBoard() {
  let board = [];
  let defaultRow = Array(gridWidth).fill(blankTile)

  for (let i = 0; i < gridHeight; i++) {
    let newRow = Object.assign([], defaultRow);
    board.push(newRow);
  }
  return board;
}


let availableGameBoardTiles = [];
for (let i = 0; i < gridHeight; i++) {
  for (let k = 0; k < gridWidth; k++) {
    availableGameBoardTiles.push([i, k])
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
const topLeftGrid = {
  rows: [0, 1, 2],
  columns: [0, 1, 2],
  coordinates: [topLeftGridTopRow, topLeftGridMiddleRow, topLeftGridBottomRow].flat()
}

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
const middleLeftGrid = {
  rows: [3, 4, 5],
  columns: [0, 1, 2],
  coordinates: [middleLeftGridTopRow, middleLeftGridMiddleRow, middleLeftGridBottomRow].flat()
}

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
const bottomLeftGrid = {
  rows: [6, 7, 8],
  columns: [0, 1, 2],
  coordinates: [bottomLeftGridTopRow, bottomLeftGridMiddleRow, bottomLeftGridBottomRow].flat()
}

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
const topMiddleGrid = {
  rows: [0, 1, 2],
  columns: [3, 4, 5],
  coordinates: [topMiddleGridTopRow, topMiddleGridMiddleRow, topMiddleGridBottomRow].flat()
}

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
const middleMiddleGrid = {
  rows: [3, 4, 5],
  columns: [3, 4, 5],
  coordinates: [middleMiddleGridTopRow, middleMiddleGridMiddleRow, middleMiddleGridBottomRow].flat()
}

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
const bottomMiddleGrid = {
  rows: [6, 7, 8],
  columns: [3, 4, 5],
  coordinates: [bottomMiddleGridTopRow, bottomMiddleGridMiddleRow, bottomMiddleGridBottomRow].flat()
}

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
const topRightGrid = {
  rows: [0, 1, 2],
  columns: [6, 7, 8],
  coordinates: [topRightGridTopRow, topRightGridMiddleRow, topRightGridBottomRow].flat()
}

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
const middleRightGrid = {
  rows: [3, 4, 5],
  columns: [6, 7, 8],
  coordinates: [middleRightGridTopRow, middleRightGridMiddleRow, middleRightGridBottomRow].flat()
}

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
const bottomRightGrid = {
  rows: [6, 7, 8],
  columns: [6, 7, 8],
  coordinates: [bottomRightGridTopRow, bottomRightGridMiddleRow, bottomRightGridBottomRow].flat()
}

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
  topRightGrid, middleRightGrid, bottomRightGrid
]

function clone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

function setBoardTile(coordinates, tile) {
  board[coordinates[0]][coordinates[1]] = tile;
}

function getBoardTile(coordinates) {
  return board[coordinates[0]][coordinates[1]];
}

function setGameBoardTile(coordinates, tile) {
  let row = coordinates[0];
  let column = coordinates[1];
  gameBoard[row][column] = tile;
  removeFromAvailabilityBoard(coordinates);
  if (isMoveIllegal(coordinates) === true) {
    debugger;
    console.log("illegal: ", tile, coordinates);
  }
}

function getGameBoardTile(coordinates) {
  return gameBoard[coordinates[0]][coordinates[1]];
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
    if (!isGridComplete(grid.coordinates)) {
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

function getGameBoardGridValues(grid) {
  let gridValues = [];

  for (coordinates of grid) {
    gridValues.push(gameBoard[coordinates[0]][coordinates[1]])
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

function getSubGrid(coordinates) {
  return eval(getGridQuadrantName(coordinates)).coordinates;
}

function getQuadrantGridValues(coordinates) {
  let grid = getSubGrid(coordinates)

  return getGridValues(grid);
}

function getQuadrantGameBoardValues(coordinates) {
  let grid = getSubGrid(coordinates);

  return getGameBoardGridValues(grid);
}

function getRowGrids(row) {
  const rowGrids = [firstRow, secondRow, thirdRow, fourthRow, fifthRow, sixthRow, seventhRow, eighthRow, ninthRow]

  return rowGrids[row];
}

function getRowGridValues(row) {
  let grid = getRowGrids(row);
  return getGridValues(grid);
}

function getRowGameBoardValues(row) {
  let grid = getRowGrids(row);
  return getGameBoardGridValues(grid);
}

function getColumnGrids(column) {
  const columnGrids = [firstColumn, secondColumn, thirdColumn, fourthColumn, fifthColumn, sixthColumn, seventhColumn, eighthColumn, ninthColumn]

  return columnGrids[column];
}

function getColumnGridValues(column) {
  let grid = getColumnGrids(column);
  return getGridValues(grid);
}

function getColumnGameBoardValues(column) {
  let grid = getColumnGrids(column);
  return getGameBoardGridValues(grid);
}

function getGameBoardGridsValues(coordinates) {
  let row = coordinates[0];
  let column = coordinates[1];

  let rowGridValues = getRowGameBoardValues(row);
  let columnGridValues = getColumnGameBoardValues(column);
  let subGridValues = getQuadrantGameBoardValues(coordinates);

  return [rowGridValues, columnGridValues, subGridValues];
}

function containsDuplicates(array) {
  for (item of array) {
    if (item === blankTile) {
      continue
    }
    let dupesArray = array.filter(e => e === item)
    if (dupesArray.length > 1) {
      return true;
    }
  }
  return false;
}

function isMoveIllegal(coordinates) {
  let grids = getGameBoardGridsValues(coordinates);

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
  for (let i = 0; i < availableGameBoardTiles.length; i++) {
    if (coordinatesEqual(coordinates, availableGameBoardTiles[i])) {
      return i;
    }
  }
}

function removeFromAvailabilityBoard(coordinates) {
  // let index = getAvailabilityIndex(coordinates);
  // availableGameBoardTiles.splice(index, 1);

  availableGameBoardTiles = availableGameBoardTiles.filter(e => !coordinatesEqual(e, coordinates))
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
      horizontal: [topMiddleGrid.coordinates, topRightGrid.coordinates],
      vertical: [middleLeftGrid.coordinates, bottomLeftGrid.coordinates]
    },
    'middleLeftGrid': {
      horizontal: [middleMiddleGrid.coordinates, middleRightGrid.coordinates],
      vertical: [topLeftGrid.coordinates, bottomLeftGrid.coordinates]
    },
    'bottomLeftGrid': {
      horizontal: [bottomMiddleGrid.coordinates, bottomRightGrid.coordinates],
      vertical: [topLeftGrid.coordinates, middleLeftGrid.coordinates]
    },
    'topMiddleGrid': {
      horizontal: [topLeftGrid.coordinates, topRightGrid.coordinates],
      vertical: [middleMiddleGrid.coordinates, bottomMiddleGrid.coordinates]
    },
    'middleMiddleGrid': {
      horizontal: [middleLeftGrid.coordinates, middleRightGrid.coordinates],
      vertical: [topMiddleGrid.coordinates, bottomMiddleGrid.coordinates]
    },
    'bottomMiddleGrid': {
      horizontal: [bottomLeftGrid.coordinates, bottomRightGrid.coordinates],
      vertical: [topMiddleGrid.coordinates, middleMiddleGrid.coordinates]
    },
    'topRightGrid': {
      horizontal: [topLeftGrid.coordinates, topMiddleGrid.coordinates],
      vertical: [middleRightGrid.coordinates, bottomRightGrid.coordinates]
    },
    'middleRightGrid': {
      horizontal: [middleLeftGrid.coordinates, middleMiddleGrid.coordinates],
      vertical: [topRightGrid.coordinates, bottomRightGrid.coordinates]
    },
    'bottomRightGrid': {
      horizontal: [bottomLeftGrid.coordinates, bottomMiddleGrid.coordinates],
      vertical: [topRightGrid.coordinates, middleRightGrid.coordinates]
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

function columnContainsNum(num, column) {
  let columnValues = getColumnGridValues(column);
  if (columnValues.includes(num)) {
    return true;
  }
  return false;
}

function rowContainsNum(num, row) {
  let rowValues = getRowGridValues(row);
  if (rowValues.includes(num)) {
    return true;
  }
  return false;
}

function decrementK(k, int) {
  k--;
  if (k < 0) {
    k = 8;
    int--;
  }

  return [k, int];
}

function undoLastXTiles(undoCount, int, k) {
  let finalUndoCoordinates;

  let counterArray = Array(undoCount).fill(1);
  for (count in counterArray) {
    // decrement because current k was abandoned and nothing to undo
    [k, int] = decrementK(k, int)

    let grid = allGrids[k];
    let offendingCoordinate = grid.coordinates.find(e => board[e[0]][e[1]] === int);

    if (offendingCoordinate !== undefined) {
      setBoardTile(offendingCoordinate, blankTile);
    }

    finalUndoCoordinates = offendingCoordinate;
  }

  // decrement k because for loop will increment immediately
  [k, int] = decrementK(k, int)

  return [finalUndoCoordinates, int, k];
}

function stuckMoveMatch(stuckMove, int, k) {
  if (stuckMove === undefined) {
    return false;
  }
  return stuckMove.k === k && stuckMove.int === int;
}

function retry() {
  board = initBoard();
  setBoard();
}

function setBoard() {
  let perRetries = 0;
  let totalRetries = 0;
  let undoLastCoordinates;
  let stuckMove;

  for (let i = 0; i < countToNineArray.length; i++) {
    let int = countToNineArray[i];
    for (let k = 0; k < allGrids.length; k++) {
      if (perRetries > maxRetriesPerRetry) {
        retry()
        return
      }

      if (totalRetries > maxRetries) {
        retry()
        return
      }

      let grid = allGrids[k];

      let availableCoordinates = grid.coordinates.filter(e => board[e[0]][e[1]] === blankTile)

      if (undoLastCoordinates !== undefined) {
        availableCoordinates = availableCoordinates.filter(e => !coordinatesEqual(e, undoLastCoordinates));
        undoLastCoordinates = undefined;
      }

      let rowsWithNumSet = [];
      let columnWithNumSet = [];

      for (row of grid.rows) {
        if (rowContainsNum(int, row)) {
          rowsWithNumSet.push(row);
        }
      }

      for (column of grid.columns) {
        if (columnContainsNum(int, column)) {
          columnWithNumSet.push(column);
        }
      }

      if (rowsWithNumSet.length > 0) {
        for (row of rowsWithNumSet) {
          availableCoordinates = availableCoordinates.filter(e => e[0] !== row);
        }
      }

      if (columnWithNumSet.length > 0) {
        for (column of columnWithNumSet) {
          availableCoordinates = availableCoordinates.filter(e => e[1] !== column);
        }
      }

      if (availableCoordinates.length === 0) {
        if (stuckMoveMatch(stuckMove, int, k)) {
          perRetries++;
        } else {
          totalRetries++;
          stuckMove = {
            k: k,
            int: int,
          }
        }

        [undoLastCoordinates, int, k] = undoLastXTiles(perRetries, int, k);
        i = int - 1;
        continue
      }

      let tileToPlay = availableCoordinates[Math.floor(Math.random() * availableCoordinates.length)];

      setBoardTile(tileToPlay, int);
    }

  }
  if (!isBoardComplete()) {
    retry()
  }
  console.log(board);
}

function createGameBoard() {
  let revealedTiles = [];
  // let remainingEmptyTiles = clone(allGrids).map((e) => e.coordinates).flat()

  // break numOfRevealedGameTiles into 9 nums for each subGrid, all > 1 and < 6

  let numTilesPerGrid = Math.floor(numOfRevealedGameTiles / 9)
  let numTilesPerGridArray = Array(9).fill(numTilesPerGrid)
  let remainder = numOfRevealedGameTiles % 9
  for (let i = 0; i < remainder; i++) {
    numTilesPerGridArray[i]++
  }

  for (let i = 0; i < 20; i++) {
    // TODO: update to switch rand element if one will be brought below 1 or above 6
    let randElem1 = numTilesPerGridArray[Math.floor(Math.random() * numTilesPerGridArray.length)];
    let randElem2 = numTilesPerGridArray[Math.floor(Math.random() * numTilesPerGridArray.length)];
    if (randElem1 < 2) {
      randElem1++;
      randElem2--;
    } else if (randElem1 > 5) {
      randElem1--;
      randElem2++;
    } else if (randElem2 < 2) {
      randElem1--;
      randElem2++;
    } else if (randElem2 > 5) {
      randElem1++;
      randElem2--;
    } else {
      randElem1--;
      randElem2++;
    }
  }

  for (let i = 0; i < 9; i++) {
    let subGrid = clone(allGrids[i].coordinates);
    for (let k = 0; k < numTilesPerGridArray[i]; k++) {
      let revealedTileCoordinates = subGrid.splice(Math.floor(Math.random() * subGrid.length), 1)
      revealedTiles.push(revealedTileCoordinates[0]);
    }
  }

  for (coordinates of revealedTiles) {
    let value = getBoardTile(coordinates);
    // gameBoard[coordinates[0]][coordinates[1]] = value;
    setGameBoardTile(coordinates, value);
  }

  return gameBoard;
}

function getPossibleValues(coordinates, claimedCoordinates) {
  let possibleValues = clone(countToNineArray);
  let row = coordinates[0];
  let column = coordinates[1];
  let subGrid = getSubGrid(coordinates);

  let numsInSubGrid = subGrid.map(e => gameBoard[e[0]][e[1]]).filter(e => e !== blankTile);

  possibleValues = possibleValues.filter(e => !claimedCoordinates.rows[e].includes(row))
  possibleValues = possibleValues.filter(e => !claimedCoordinates.columns[e].includes(column))
  possibleValues = possibleValues.filter(e => !numsInSubGrid.includes(e))

  return possibleValues;
}

function initPossibleCoordinatesBoard() {
  let board = [];

  for (let i = 0; i < gridHeight; i++) {
    let row = new Array;
    for (let k = 0; k < gridWidth; k++) {
      row.push(new Array);
    }
    board.push(row);
  }
  return board;
}

function isGameBoardGridComplete(subGrid) {
  let countToNine = clone(countToNineArray);

  for (coordinates of subGrid) {
    let tile = getGameBoardTile(coordinates);
    let index = countToNine.indexOf(tile);

    if (index < 0) {
      break;
    }

    countToNine.splice(index, 1);
  }

  return countToNine.length === 0;
}

function isGameBoardComplete() {
  for (grid of allGrids) {
    if (!isGameBoardGridComplete(grid.coordinates)) {
      return false;
    }
  }
  return true;
}

function formatBoardAsStrings(boardObj) {
  let stringBoard = clone(boardObj);
  for (let i = 0; i < gridWidth; i++) {
    for (let k = 0; k < gridHeight; k++) {
      let value = boardObj[i][k]
      if (value === blankTile) {
        stringBoard[i][k] = ' ';
      } else {
        stringBoard[i][k] = value.toString();
      }
    }
  }
  return stringBoard;
}

// function getRowsAndColumnsForSubGrid(subGrid) {
//   let rowNumbers = subgrid.rows;
//   let columnNumbers = subgrid.columns;

//   let rows = [];
//   for (row of rowNumbers) {
//     let oneRow = [];
//     for (column of columnNumbers) {
//       oneRow.push([row, column]);
//     }
//     rows.push(oneRow);
//   }

//   let columns = [];
//   for (columns of columnNumbers) {
//     let oneColumn = [];
//     for (row of rowNumbers) {
//       oneColumn.push([row, column]);
//     }
//     columns.push(oneColumn);
//   }
//   // debugger
// }

function removeNumFromArray(int, coordinates, possibleCoordinates) {
  let row = coordinates[0];
  let column = coordinates[1];

  if (possibleCoordinates[row][column].includes(int)) {
    possibleCoordinates[row][column] = possibleCoordinates[row][column].filter(e => e !== int)
  }

  return possibleCoordinates;
}

function removeNumFromPossibleCoordinates(int, row, column, possibleCoordinates) {
  if (row !== null) {
    let rowCoordinates = getRowGrids(row)
    for (coordinates of rowCoordinates) {
      possibleCoordinates = removeNumFromArray(int, coordinates, possibleCoordinates)
    }
  }

  if (column !== null) {
    let columnCoordinates = getColumnGrids(column)
    for (coordinates of columnCoordinates) {
      possibleCoordinates = removeNumFromArray(int, coordinates, possibleCoordinates)
    }
  }

  if (row !== null && column !== null) {
    let subGrid = getSubGrid([row, column]);
    for (coordinates of subGrid) {
      possibleCoordinates = removeNumFromArray(int, coordinates, possibleCoordinates)
    }
  }
  return possibleCoordinates;
}

function updatePossibleMoves() {
  // TODO:
  // whenever a play is made, need to remove any other instances of that played number from
  // possible moves in that column, row and subGrid

  // if doing this, may not need to check for possible moves anymore
  // and only look at existing possible moves and keep updating them
}

function availabilityBoardMismatch() {
  let tilesMismatched = [];
  let availabilityIndex = 0;

  try {
    for (let i = 0; i < gridHeight; i++) {
      for (let k = 0; k < gridWidth; k++) {
        if (gameBoard[i][k] === blankTile) {
          if (!coordinatesEqual(availableGameBoardTiles[availabilityIndex], [i, k])) {
            console.log(`mismatch: ${availableGameBoardTiles[availabilityIndex]} ${[i, k]}`)
            // tilesMismatched.push([i, k])
            return false
          }
          availabilityIndex++
        }
      }
    }
    // console.log("tilesMismatched: ", tilesMismatched);
    // return tilesMismatched.length === 0;
  } catch (err) {
    debugger
  }
}

function solutionErrorCheck() {
  let errorReport = {
    errors: 0,
    errorCoordinates: [],
  }

  for (subGrid of allGrids) {
    for (coordinates of subGrid.coordinates) {
      let row = coordinates[0];
      let column = coordinates[1];
      let gameBoardTile = gameBoard[row][column];
      let solutionTile = board[row][column];
      if (gameBoardTile === blankTile) {
        continue
      }
      if (gameBoardTile !== solutionTile) {
        errorReport.errors++;
        errorReport.errorCoordinates.push(coordinates)
      }
    }
  }
  console.log("solutionErrorReport: ", errorReport);
}

function possibleCoordinatesErrorCheck(possibleCoordinates) {
  let errorReport = {
    errors: 0,
    errorCoordinates: [],
  }

  for (subGrid of allGrids) {
    for (coordinates of subGrid.coordinates) {
      let row = coordinates[0];
      let column = coordinates[1];
      let possibleCoordinateTile = possibleCoordinates[row][column];
      let gameBoardTile = gameBoard[row][column];
      if (gameBoardTile === blankTile) {
        if (possibleCoordinateTile.length === 0) {
          errorReport.errors++;
          errorReport.errorCoordinates.push(coordinates)
        }
      }
      if (gameBoardTile !== blankTile) {
        if (possibleCoordinateTile.length > 0) {
          errorReport.errors++;
          errorReport.errorCoordinates.push(coordinates)
        }
      }
    }
  }
  console.log("possibleCoordinatesErrorReport: ", errorReport);
}

function boardCompleteCheck() {
  for (subGrid of allGrids) {
    for (coordinates of subGrid.coordinates) {
      let row = coordinates[0];
      let column = coordinates[1];
      let gameBoardTile = gameBoard[row][column];
      if (gameBoardTile === blankTile) {
        return false;
      }
    }
  }
  return true;
}

function solvePuzzle() {
  // claim all the pre-set numbers on the starting board
  let claimedCoordinates = {
    rows: {},
    columns: {}
  };
  for (num of countToNineArray) {
    claimedCoordinates.rows[num] = [];
    claimedCoordinates.columns[num] = [];
  }

  for (let i = 0; i < 9; i++) {
    for (let k = 0; k < 9; k++) {
      let tileValue = getGameBoardTile([i, k]);
      if (tileValue !== blankTile) {
        claimedCoordinates.rows[tileValue].push(i);
        claimedCoordinates.columns[tileValue].push(k);
      }
    }
  }

  for (coordinates of availableGameBoardTiles) {
    let row = coordinates[0];
    let column = coordinates[1];

    let possibleValues = getPossibleValues(coordinates, claimedCoordinates);
    if (possibleValues.length === 1) {
      let tileValue = possibleValues[0];
      setGameBoardTile(coordinates, tileValue);
      claimedCoordinates.rows[tileValue].push(row);
      claimedCoordinates.columns[tileValue].push(column);
      possibleCoordinates = removeNumFromPossibleCoordinates(tileValue, row, column, possibleCoordinates);
    } else if (possibleValues.length > 1) {
      for (num of possibleValues) {
        possibleCoordinates[row][column].push(num)
      }
    }
  }

  let counter = 0;
  // while (availableGameBoardTiles.length > 0) {
  while (true) {
    for (subGrid of allGrids) {
      let locationsArray = {};
      for (coordinates of subGrid.coordinates) {
        let row = coordinates[0];
        let column = coordinates[1];
        let possibleValues = possibleCoordinates[row][column];

        if (possibleValues.length === 0) {
          continue
        }

        if (possibleValues.length === 1) {
          let tileValue = possibleValues[0];
          setGameBoardTile(coordinates, tileValue);
          claimedCoordinates.rows[tileValue].push(row);
          claimedCoordinates.columns[tileValue].push(column);
          possibleCoordinates = removeNumFromPossibleCoordinates(tileValue, row, column, possibleCoordinates);
        } else if (possibleValues.length > 1) {
          for (int of possibleValues) {
            if (Array.isArray(locationsArray[int])) {
              locationsArray[int].push([row, column]);
            } else {
              locationsArray[int] = [row, column];
            }
          }
        }
      }

      for (int in locationsArray) {
        int = parseInt(int);
        let locations = locationsArray[int];
        // num might only be possible in one tile, but that tile might have other possible nums
        if (locations.length === 1 && possibleCoordinates[row][column].includes(tile)) {
          let row = locations[0][0];
          let column = locations[0][1];
          setGameBoardTile(locations[0], int);
          // claimedCoordinates.rows[int].push(row);
          // claimedCoordinates.columns[int].push(column);
          possibleCoordinates = removeNumFromPossibleCoordinates(int, row, column, possibleCoordinates)
          possibleCoordinates[row][column] = [];
          // might be able to claim a row or a column when multiple tiles are possible for a single num
        } else if (locations[0].length > 1) {
          let rows = [];
          let columns = [];

          for (coordinates of locations) {
            rows.push(coordinates[0]);
            columns.push(coordinates[1]);
          }
          let uniqueRows = [...new Set(rows)]
          let uniqueColumns = [...new Set(columns)]

          if (uniqueRows.length === 1) {
            // console.log("unique row: ", int, uniqueRows[0])
            // claimedCoordinates.rows[int].push(uniqueRows[0]);
            // debugger
            possibleCoordinates = removeNumFromPossibleCoordinates(int, uniqueRows[0], null, possibleCoordinates)
            for (column of uniqueColumns) {
              possibleCoordinates[uniqueRows[0]][column].push(int);
            }
          }
          if (uniqueColumns.length === 1) {
            // console.log("unique column: ", int, uniqueColumns[0])
            // claimedCoordinates.columns[int].push(uniqueColumns[0]);
            // debugger
            possibleCoordinates = removeNumFromPossibleCoordinates(int, null, uniqueColumns[0], possibleCoordinates)
            for (row of uniqueRows) {
              possibleCoordinates[row][uniqueColumns[0]].push(int);
            }
          }
        }
      }
    }


    counter++;
    if (counter > 100) {
      possibleCoordinatesErrorCheck(possibleCoordinates)
      console.log("possibleCoordinates: ", possibleCoordinates);
      break
      counter = 0;
      gameBoard = initBoard();
      createGameBoard();
      setupBoard = clone(gameBoard);
      formatSetupBoard()
      solvePuzzle();
      break
    }
  }
}

let board = initBoard();
setBoard();

// need a separate variable for the starting board with revealed tiles
// then another for the board that's used to play it to see if it's possible
let gameBoard = initBoard();
createGameBoard();
let possibleCoordinates = initPossibleCoordinatesBoard();
let setupBoard = clone(gameBoard);
console.log("setupBoard: ", formatBoardAsStrings(setupBoard));
solvePuzzle();
console.log("gameBoard: ", formatBoardAsStrings(gameBoard));
// console.log("availableGameBoardTiles: ", availableGameBoardTiles)
// console.log("solution board: ", formatBoardAsStrings(board))
solutionErrorCheck()
console.log("gameBoard completed: ", boardCompleteCheck());
