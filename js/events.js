console.log('This is separate JS file');
// option 1: directly set on the HTML element
// <button onclick="console.log(65)">another btn</button>

// option 2: onclick function on the html element
// <button onclick="makRed()">Make Red</button>
// IMPORTANT: we will use this
function makRed() {
    document.body.style.backgroundColor = 'red';
}

// option 3: onclick function
// <button id="make-blue">Make Blue</button>
const makeBlueBtn = document.getElementById('make-blue');
makeBlueBtn.onclick = makeBlue;

function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}

// option 3: another [use sometimes]
// <button id="make-purple">Make Purple</button>
const purpleBtn = document.getElementById("make-purple");
purpleBtn.onclick = function makePurple() {
    document.body.style.backgroundColor = "purple";
}

// option 4: 
const greenBtn = document.getElementById('make-green');
greenBtn.addEventListener('click', makeGreen); function makeGreen() {
    document.body.style.backgroundColor = 'green';
}

// option 4: another
const blackBtn = document.getElementById('make-black');
blackBtn.addEventListener('click', function makeBlack() {
    document.body.style.backgroundColor = 'black';
});

// option 4: final [use sometimes]
document.getElementById('make-skyblue').addEventListener('click', function makeSkyblue() {
    document.body.style.backgroundColor ='skyblue';
});