window.addEventListener('resize', uponResize);
const gridDiv = document.getElementById('grid');
const promptButton = document.getElementById('prompt-button');
const colorPicker = document.getElementById('color-picker');

let gridSize = 16;
let chosenColor = 'blue';

colorPicker.addEventListener('input', (event) =>{
    chosenColor = event.target.value;
});

promptButton.addEventListener('click', chooseSize);

function createGrid(dimension=16) {

        const cellHeight = Math.floor(grid.clientWidth / dimension);
        const numberOfCells = dimension * dimension;
        for (let index = 0; index < numberOfCells; index++) {
            const cell = document.createElement("div");
            cell.classList.add('cell-div');
            cell.style.width = cellHeight + 'px';
            cell.style.height = cellHeight + 'px';
            cell.addEventListener('mouseenter', function() {                
                cell.style.backgroundColor = chosenColor;
            });
            gridDiv.append(cell);
        }    
}

function chooseSize() {
    alert('chooseSize function called');
    gridSize = parseInt(prompt("Enter grid size (4 - 100)"));
    if(gridSize <=100 && gridSize >=4){
        removeAllChildren(gridDiv);
        createGrid(gridSize);
    } else {
        alert("choose a dimension between 4 and 100!");
    }
}

function removeAllChildren(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function uponResize(){
    removeAllChildren(gridDiv);
    createGrid(gridSize);
}

createGrid(gridSize);