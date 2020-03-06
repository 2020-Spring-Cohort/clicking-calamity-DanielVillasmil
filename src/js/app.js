let llamaCount = 0;
let autoClick = 0;


function update() {
    document.getElementById('llama').innerText = llamaCount;
    document.title = llamaCount + 'Llamas';
    document.getElementById('autoClickAmount').innerHTML = "You own " + autoClick + " llama companions";

}
// timer 1000ms (one second)//
function timer() {
    llamaCount = llamaCount + autoClick;
    update()

}
setInterval(timer, 1000)

function countClick() {
    document.getElementById('llama').innerHTML = llamaCount;
    document.title = llamaCount + 'Llamas';
}

//CLickes by one//
function countClick() {
    llamaCount = llamaCount + 1;
    update();
}


function save() {
    localStorage.setItem('llamaCount', llamaCount);
}

function load() {
    llamaCount = localStorage.getItem('llamaCount');
    llamaCount = parseInt(llamaCount);
    update();
}

function buyCompanion() {
    if (llamaCount >= ((autoClick + 1) * 100)) {
        llamaCount = llamaCount - ((autoClick + 1) * 12);
        autoClick = autoClick + 1;

    }
}