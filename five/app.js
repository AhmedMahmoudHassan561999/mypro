const statusDiv = document.querySelector('.status');
const resetDiv = document.querySelector('.reset');
const cellDivs = document.querySelectorAll('.game-cell');

const xSymbol = '×';
const oSymbol = '○';

let gameIsLive = true;
let xIsNext = true;


const letterToSymbol = (letter) => letter === 'x' ? xSymbol : oSymbol;

const handleWin = (letter) => {
    gameIsLive = false;
    if (letter === 'x') {
        statusDiv.innerHTML = `${letterToSymbol(letter)} has won!`;
    } else {
        statusDiv.innerHTML = `<span>${letterToSymbol(letter)} has won!</span>`;
    }
};

const checkGameStatus = () => {

    const topLeft = cellDivs[0].classList[1];
    const topMiddle = cellDivs[1].classList[1];
    const topRight = cellDivs[2].classList[1];
    const tooop = cellDivs[3].classList[1];
    const tooop2 = cellDivs[4].classList[1];

    const middleLeft = cellDivs[5].classList[1];
    const middleMiddle = cellDivs[6].classList[1];
    const middleRight = cellDivs[7].classList[1];
    const middle = cellDivs[8].classList[1];
    const middle2 = cellDivs[9].classList[1];


    const bottomLeft = cellDivs[10].classList[1];
    const bottomMiddle = cellDivs[11].classList[1];
    const bottomRight = cellDivs[12].classList[1];
    const bottom = cellDivs[13].classList[1];
    const bottom1 = cellDivs[14].classList[1];

    const bottomLeft2 = cellDivs[15].classList[1];
    const bottomMiddle2 = cellDivs[16].classList[1];
    const bottomRight2 = cellDivs[17].classList[1];
    const bottom2 = cellDivs[18].classList[1];
    const bottom22 = cellDivs[19].classList[1];

    const bottomLeft3 = cellDivs[20].classList[1];
    const bottomMiddle3 = cellDivs[21].classList[1];
    const bottomRight3 = cellDivs[22].classList[1];
    const bottom3 = cellDivs[23].classList[1];
    const bottom33 = cellDivs[24].classList[1];


    // check winner
    if (topLeft && topLeft === tooop2 && topLeft === topMiddle && topLeft === topRight && tooop === topLeft) {
        handleWin(topLeft);
        cellDivs[0].classList.add('won');
        cellDivs[1].classList.add('won');
        cellDivs[2].classList.add('won');
        cellDivs[3].classList.add('won');
        cellDivs[4].classList.add('won');

    } else if (middleLeft && middleLeft === middle2 && middleLeft === middleMiddle && middleLeft === middleRight && middle === middleRight) {
        handleWin(middleLeft);
        cellDivs[5].classList.add('won');
        cellDivs[6].classList.add('won');
        cellDivs[7].classList.add('won');
        cellDivs[8].classList.add('won');
        cellDivs[9].classList.add('won');

    } else if (bottomLeft && bottomLeft === bottom1 && bottomLeft === bottomMiddle && bottomLeft === bottomRight && bottom === bottomRight) {
        handleWin(bottomLeft);
        cellDivs[13].classList.add('won');
        cellDivs[12].classList.add('won');
        cellDivs[10].classList.add('won');
        cellDivs[11].classList.add('won');
        cellDivs[14].classList.add('won');


    } else if (bottomLeft2 && bottomLeft2 === bottom22 && bottomLeft2 === bottomMiddle2 && bottomLeft2 === bottomRight2 && bottom2 === bottomRight2) {
        handleWin(bottomLeft2);
        cellDivs[15].classList.add('won');
        cellDivs[16].classList.add('won');
        cellDivs[17].classList.add('won');
        cellDivs[18].classList.add('won');
        cellDivs[19].classList.add('won');

    } else if (bottomLeft3 && bottomLeft3 === bottom33 && bottomLeft3 === bottomMiddle3 && bottomLeft23 === bottomRight3 && bottom3 === bottomRight3) {
        handleWin(bottomLeft2);
        cellDivs[20].classList.add('won');
        cellDivs[21].classList.add('won');
        cellDivs[22].classList.add('won');
        cellDivs[23].classList.add('won');
        cellDivs[24].classList.add('won');

    } else if (topLeft && topLeft === middleLeft && topLeft === bottomLeft && bottomLeft2 === topLeft && topLeft === bottomLeft3) {
        handleWin(topLeft);
        cellDivs[0].classList.add('won');
        cellDivs[5].classList.add('won');
        cellDivs[10].classList.add('won');
        cellDivs[15].classList.add('won');
        cellDivs[15].classList.add('won');

    } else if (topMiddle && topMiddle === bottomMiddle3 && topMiddle === middleMiddle && topMiddle === bottomMiddle && topMiddle === bottomMiddle2) {
        handleWin(topMiddle);
        cellDivs[1].classList.add('won');
        cellDivs[6].classList.add('won');
        cellDivs[11].classList.add('won');
        cellDivs[16].classList.add('won');
        cellDivs[21].classList.add('won');

    } else if (topRight && topRight === bottomRight3 && topRight === middleRight && topRight === bottomRight && topRight === bottomRight2) {
        handleWin(topRight);
        cellDivs[2].classList.add('won');
        cellDivs[7].classList.add('won');
        cellDivs[12].classList.add('won');
        cellDivs[17].classList.add('won');
        cellDivs[22].classList.add('won');

    } else if (tooop && tooop === middle && middle === bottom && bottom ===
        bottom2 && bottom ===
        bottom3) {
        handleWin(tooop);
        cellDivs[3].classList.add('won');
        cellDivs[8].classList.add('won');
        cellDivs[13].classList.add('won');
        cellDivs[18].classList.add('won');
        cellDivs[23].classList.add('won');

    } else if (tooop2 && tooop2 === middle2 && middle2 === bottom1 &&
        bottom1 ===
        bottom22 && bottom22 === bottom33) {
        handleWin(tooop2);
        cellDivs[4].classList.add('won');
        cellDivs[9].classList.add('won');
        cellDivs[14].classList.add('won');
        cellDivs[19].classList.add('won');
        cellDivs[24].classList.add('won');

    } else if (topLeft && topLeft === middleMiddle && topLeft === bottomRight &&
        topLeft === bottom2 && topLeft === bottom33) {
        handleWin(topLeft);
        cellDivs[0].classList.add('won');
        cellDivs[6].classList.add('won');
        cellDivs[12].classList.add('won');
        cellDivs[18].classList.add('won');
        cellDivs[24].classList.add('won');

    } else if (tooop2 && tooop2 === middle && tooop2 ===
        bottomRight && tooop2 === bottomMiddle2 && tooop2 === bottomLeft3) {
        handleWin(tooop2);
        cellDivs[4].classList.add('won');
        cellDivs[8].classList.add('won');
        cellDivs[12].classList.add('won');
        cellDivs[16].classList.add('won');
        cellDivs[20].classList.add('won');

    } else if (topLeft && topMiddle && topRight && tooop && middleLeft && middleMiddle && middleRight &&
        middle2 && middle && bottomLeft && bottomMiddle && bottomRight && bottom && bottom1 && bottomLeft2 && bottomMiddle2 && bottomRight2 &&
        tooop2 && bottomRight3 && bottomLeft3 && bottom33 && bottom3 && bottomMiddle3 && bottom2
    ) {
        gameIsLive = false;
        statusDiv.innerHTML = 'Game is tied!';
    } else {
        xIsNext = !xIsNext;
        if (xIsNext) {
            statusDiv.innerHTML = `${xSymbol} is next`;
        } else {
            statusDiv.innerHTML = `<span>${oSymbol} is next</span>`;
        }
    }
};


// event Handlers
const handleReset = () => {
    xIsNext = true;
    statusDiv.innerHTML = `${xSymbol} is next`;
    for (const cellDiv of cellDivs) {
        cellDiv.classList.remove('x');
        cellDiv.classList.remove('o');
        cellDiv.classList.remove('won');
    }
    gameIsLive = true;
};

const handleCellClick = (e) => {
    const classList = e.target.classList;

    if (!gameIsLive || classList[1] === 'x' || classList[1] === 'o') {
        return;
    }

    if (xIsNext) {
        classList.add('x');
        checkGameStatus();
    } else {
        classList.add('o');
        checkGameStatus();
    }
};


// event listeners
resetDiv.addEventListener('click', handleReset);

for (const cellDiv of cellDivs) {
    cellDiv.addEventListener('click', handleCellClick)
}

function redColor() {
    document.getElementById("container").style.backgroundColor = "  #ff5c29";
    document.getElementById("box-1").style.backgroundColor = "#ff5c29";
    document.getElementById("box-2").style.backgroundColor = "#ff5c29";
    document.getElementById("box-3").style.backgroundColor = "#ff5c29";
    document.getElementById("box-4").style.backgroundColor = "#ff5c29";
    document.getElementById("box-5").style.backgroundColor = "#ff5c29";
    document.getElementById("box-6").style.backgroundColor = "#ff5c29";
    document.getElementById("box-7").style.backgroundColor = "#ff5c29";
    document.getElementById("box-8").style.backgroundColor = "#ff5c29";
    document.getElementById("box-9").style.backgroundColor = "#ff5c29";
    document.getElementById("box-10").style.backgroundColor = "#ff5c29";
    document.getElementById("box-11").style.backgroundColor = "#ff5c29";
    document.getElementById("box-12").style.backgroundColor = "#ff5c29";
    document.getElementById("box-13").style.backgroundColor = "#ff5c29";
    document.getElementById("box-14").style.backgroundColor = "#ff5c29";
    document.getElementById("box-15").style.backgroundColor = "#ff5c29";
    document.getElementById("box-16").style.backgroundColor = "#ff5c29";
    document.getElementById("box-17").style.backgroundColor = "#ff5c29";
    document.getElementById("box-18").style.backgroundColor = "#ff5c29";
    document.getElementById("box-19").style.backgroundColor = "#ff5c29";
    document.getElementById("box-20").style.backgroundColor = "#ff5c29";
    document.getElementById("box-21").style.backgroundColor = "#ff5c29";
    document.getElementById("box-22").style.backgroundColor = "#ff5c29";
    document.getElementById("box-23").style.backgroundColor = "#ff5c29";
    document.getElementById("box-24").style.backgroundColor = "#ff5c29";
    document.getElementById("box-25").style.backgroundColor = "#ff5c29";
    document.getElementById("body").style.backgroundColor = "#ff5c29";

}

function yellowColor() {
    document.getElementById("container").style.backgroundColor = "#ffff66";
    document.getElementById("box-1").style.backgroundColor = "#ffff66";
    document.getElementById("box-2").style.backgroundColor = "#ffff66";
    document.getElementById("box-3").style.backgroundColor = "#ffff66";
    document.getElementById("box-4").style.backgroundColor = "#ffff66";
    document.getElementById("box-5").style.backgroundColor = "#ffff66";
    document.getElementById("box-6").style.backgroundColor = "#ffff66";
    document.getElementById("box-7").style.backgroundColor = "#ffff66";
    document.getElementById("box-8").style.backgroundColor = "#ffff66";
    document.getElementById("box-9").style.backgroundColor = "#ffff66";
    document.getElementById("box-10").style.backgroundColor = "#ffff66";
    document.getElementById("box-11").style.backgroundColor = "#ffff66";
    document.getElementById("box-12").style.backgroundColor = "#ffff66";
    document.getElementById("box-13").style.backgroundColor = "#ffff66";
    document.getElementById("box-14").style.backgroundColor = "#ffff66";
    document.getElementById("box-15").style.backgroundColor = "#ffff66";
    document.getElementById("box-16").style.backgroundColor = "#ffff66";
    document.getElementById("box-16").style.backgroundColor = "#ffff66";
    document.getElementById("box-17").style.backgroundColor = "#ffff66";
    document.getElementById("box-18").style.backgroundColor = "#ffff66";
    document.getElementById("box-19").style.backgroundColor = "#ffff66";
    document.getElementById("box-20").style.backgroundColor = "#ffff66";
    document.getElementById("box-21").style.backgroundColor = "#ffff66";
    document.getElementById("box-22").style.backgroundColor = "#ffff66";
    document.getElementById("box-23").style.backgroundColor = "#ffff66";
    document.getElementById("box-24").style.backgroundColor = "#ffff66";
    document.getElementById("box-25").style.backgroundColor = "#ffff66";
    document.getElementById("body").style.backgroundColor = "#ffff66";

}

function greenColor() {
    document.getElementById("container").style.backgroundColor = "#66ff66";
    document.getElementById("box-1").style.backgroundColor = "#66ff66";
    document.getElementById("box-2").style.backgroundColor = "#66ff66";
    document.getElementById("box-3").style.backgroundColor = "#66ff66";
    document.getElementById("box-4").style.backgroundColor = "#66ff66";
    document.getElementById("box-5").style.backgroundColor = "#66ff66";
    document.getElementById("box-6").style.backgroundColor = "#66ff66";
    document.getElementById("box-7").style.backgroundColor = "#66ff66";
    document.getElementById("box-8").style.backgroundColor = "#66ff66";
    document.getElementById("box-9").style.backgroundColor = "#66ff66";
    document.getElementById("box-10").style.backgroundColor = "#66ff66";
    document.getElementById("box-11").style.backgroundColor = "#66ff66";
    document.getElementById("box-12").style.backgroundColor = "#66ff66";
    document.getElementById("box-13").style.backgroundColor = "#66ff66";
    document.getElementById("box-14").style.backgroundColor = "#66ff66";
    document.getElementById("box-15").style.backgroundColor = "#66ff66";
    document.getElementById("box-16").style.backgroundColor = "#66ff66";
    document.getElementById("box-17").style.backgroundColor = "#66ff66";
    document.getElementById("box-18").style.backgroundColor = "#66ff66";
    document.getElementById("box-19").style.backgroundColor = "#66ff66";
    document.getElementById("box-20").style.backgroundColor = "#66ff66";
    document.getElementById("box-21").style.backgroundColor = "#66ff66";
    document.getElementById("box-22").style.backgroundColor = "#66ff66";
    document.getElementById("box-23").style.backgroundColor = "#66ff66";
    document.getElementById("box-24").style.backgroundColor = "#66ff66";
    document.getElementById("box-25").style.backgroundColor = "#66ff66";
    document.getElementById("body").style.backgroundColor = "#66ff66";

}

function blueColor() {
    document.getElementById("container").style.backgroundColor = "#3d3dff";
    document.getElementById("box-1").style.backgroundColor = "#3d3dff";
    document.getElementById("box-2").style.backgroundColor = "#3d3dff";
    document.getElementById("box-3").style.backgroundColor = "#3d3dff";
    document.getElementById("box-4").style.backgroundColor = "#3d3dff";
    document.getElementById("box-5").style.backgroundColor = "#3d3dff";
    document.getElementById("box-6").style.backgroundColor = "#3d3dff";
    document.getElementById("box-7").style.backgroundColor = "#3d3dff";
    document.getElementById("box-8").style.backgroundColor = "#3d3dff";
    document.getElementById("box-9").style.backgroundColor = "#3d3dff";
    document.getElementById("box-10").style.backgroundColor = "#3d3dff";
    document.getElementById("box-11").style.backgroundColor = "#3d3dff";
    document.getElementById("box-12").style.backgroundColor = "#3d3dff";
    document.getElementById("box-13").style.backgroundColor = "#3d3dff";
    document.getElementById("box-14").style.backgroundColor = "#3d3dff";
    document.getElementById("box-15").style.backgroundColor = "#3d3dff";
    document.getElementById("box-16").style.backgroundColor = "#3d3dff";
    document.getElementById("box-16").style.backgroundColor = "#3d3dff";
    document.getElementById("box-17").style.backgroundColor = "#3d3dff";
    document.getElementById("box-18").style.backgroundColor = "#3d3dff";
    document.getElementById("box-19").style.backgroundColor = "#3d3dff";
    document.getElementById("box-20").style.backgroundColor = "#3d3dff";
    document.getElementById("box-21").style.backgroundColor = "#3d3dff";
    document.getElementById("box-22").style.backgroundColor = "#3d3dff";
    document.getElementById("box-23").style.backgroundColor = "#3d3dff";
    document.getElementById("box-24").style.backgroundColor = "#3d3dff";
    document.getElementById("box-25").style.backgroundColor = "#3d3dff";
    document.getElementById("body").style.backgroundColor = "rgb(61, 61, 255)";

}