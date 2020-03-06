let llamaCount = 0;
let autoClick = 0;

function update() {
    document.getElementById('llama').innerText = llamaCount;
    document.title = llamaCount + 'Llamas';
    document.getElementById('autoClickAmount').innerHTML = "You have " + autoClick + " grass";
    document.getElementById('costCompanion').innerHTML =  ((autoClick + 1) * 0.10) + " llamas";
}


// timer 1000ms (one second)//
function timer() {
    llamaCount = llamaCount + autoClick;
    update();
}
setInterval(timer, 1000);


//CLicks by one//
function countClick() {
    llamaCount = llamaCount + 1;
    document.getElementById('llama').innerHTML = llamaCount;
    document.title = llamaCount + 'Llamas';
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

function clickCompanion() {
    if (llamaCount >= ((autoClick + 1) * 100)) {
        llamaCount = llamaCount - ((autoClick + 1) * 100);
        autoClick = autoClick + 1;
        update();
    }
}