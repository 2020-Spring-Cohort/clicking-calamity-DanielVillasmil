
let autoClick = 0;
let collectiveCompaunderClick = 0;
let multiplier = 1.2;
let power = 0;
let priceMultiplier = 0.10;
let collectiveCompaunderCost = 10;
let llamaCount = Math.pow(multiplier, power);
let companionCost = 100;


function update() {
    document.getElementById('llama').innerText = Math.round(llamaCount);
    document.title = Math.round(llamaCount) + ' Llamas';
    document.getElementById('costMultiplier').innerHTML = 'Cost: ' + collectiveCompaunderCost + ' llamas';
    document.getElementById('currentMultiplier').innerHTML = 'You current multiplier is x' + collectiveCompaunderClick;
    document.getElementById('autoClickAmount').innerHTML = 'You have ' + autoClick + ' grass';
    document.getElementById('costCompanion').innerHTML = 'Cost: ' + (companionCost) + ' llamas';
    document.getElementById('llamasPerSecond').innerHTML = (autoClick * multiplier) + ' llamas per second';
}

function countClick() {
    llamaCount += Math.pow(multiplier, power);
    update();
}

function save() {
    localStorage.setItem('llamaCount', llamaCount);
    localStorage.setItem('autoClick', autoClick);
}

function load() {
    llamaCount = localStorage.getItem('llamaCount');
    llamaCount = parseInt(llamaCount);
    autoClick = localStorage.getItem('autoClick');
    autoClick = parseInt(autoClick);
    update();
}

function reset() {
    llamaCount = 0;
    multiplier = 0;
    clickCompanion = 0;
    update();
}

function clickCompanion() {
    if (llamaCount >= llamaCount) {
        llamaCount = llamaCount - companionCost;
        autoClick++;
        companionCost += Math.round(companionCost * 0.10);
        update();
    }
}
function timer() {
    llamaCount = llamaCount + autoClick;
    llamaCount = llamaCount + collectiveCompaunderClick;
    update();
}
setInterval(timer, 1000);


function buyMultiplier() {
    if (llamaCount >= collectiveCompaunderCost) {
        llamaCount = llamaCount - collectiveCompaunderCost;
        collectiveCompaunderClick++;
        collectiveCompaunderCost += Math.round(collectiveCompaunderCost * priceMultiplier);
        power++;
        llamaCount += value;
        priceMultiplier += 0.10;
        update()
    }
}

function openAlert(){
    alert("Coo Coo Computing Challengers: We are a company who focuses on making click based games. Which are perfect for unwinding from a long day or just waiting for your flight to board.");
}