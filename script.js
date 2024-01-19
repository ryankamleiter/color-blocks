console.log('🟥 🟦 🟩 🟨');
let redCount = 1;
let blueCount = 1;
let greenCount = 1;
let yellowCount = 1;

function onReady() {
    let redButton = document.getElementById('red-btn');
    let blueButton = document.getElementById('blue-btn');
}
function handleRedClick() {
    let theDivIWantToAddTo = document.querySelector("#blocks");
    let newBlock = document.createElement('div');
    newBlock.className = 'block red-fill';
    theDivIWantToAddTo.appendChild(newBlock);
    // increment and update counter
    redCount += 1;
    document.getElementById('red-count').innerText = redCount;
    newBlock.addEventListener('click', deleteBlock)

    console.log('red button clicked');
};
function handleBlueClick() {
    let theDivIWantToAddTo = document.querySelector("#blocks");
    let newBlock = document.createElement('div');
    newBlock.className = 'block blue-fill';
    theDivIWantToAddTo.appendChild(newBlock);
    // increment and update counter
    blueCount += 1;
    document.getElementById('blue-count').innerText = blueCount;

    newBlock.addEventListener('click', deleteBlock)

    console.log('blue button clicked');
};
function handleGreenClick() {
    let theDivIWantToAddTo = document.querySelector("#blocks");
    let newBlock = document.createElement('div');
    newBlock.className = 'block green-fill';
    theDivIWantToAddTo.appendChild(newBlock);
    // increment and update counter
    greenCount += 1;
    document.getElementById('green-count').innerText = greenCount;

    newBlock.addEventListener('click', deleteBlock)

    console.log('green button clicked');
};
function handleYellowClick() {
    let theDivIWantToAddTo = document.querySelector("#blocks");
    let newBlock = document.createElement('div');
    newBlock.className = 'block yellow-fill';
    theDivIWantToAddTo.appendChild(newBlock);
    // increment and update counter
    yellowCount += 1;
    document.getElementById('yellow-count').innerText = yellowCount;

    newBlock.addEventListener('click', deleteBlock)

    console.log('yellow button clicked');
};
function deleteBlock(event) {
    event.target.remove()
}

// function deleteBlock(event) {
//     event.target.remove();
// }
// function deleteBlue(event) {
//     event.target.remove();
// }
// function deleteGreen(event) {
//     event.target.remove();
// }
onReady();
