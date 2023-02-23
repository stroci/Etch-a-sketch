const gridContainer = document.querySelector("#grid-container");
const gridSetupButton = document.querySelector("#gridSizeBtn");
// const randomButton = document.querySelector("#randomBtn");

const containerSize = 960;
let gridSize = 16;
let squareSize = 60;
let randomize = false;

// randomButton.addEventListener("click", toggleRandomize);
gridSetupButton.addEventListener("click", getGridSize);

// function toggleRandomize() {
//     randomize = !randomize;
//     randomButton.classList.toggle("active");
// }

function getGridSize() {
    gridSize = prompt("Number of squares per side:");
    generateGrid();
}

function newElement(squareSize) {
    let gridElement = document.createElement("div");
    gridElement.classList.add("grid-element");
    gridElement.style.height = squareSize+"px";
    gridElement.style.width = squareSize+"px";
    gridElement.addEventListener("mouseover", () => {
        gridElement.classList.add("hover");
    })
    return gridElement;
}

function generateGrid() {
    gridContainer.innerHTML = "";
    squareSize = Math.floor(containerSize / gridSize);
    for (let i = 1; i <= gridSize*gridSize; i++) {
        gridContainer.appendChild(newElement(squareSize));
    }
}

generateGrid();

