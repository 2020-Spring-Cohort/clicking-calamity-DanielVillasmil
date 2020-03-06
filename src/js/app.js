let llamaCount = 0;
let autoClick = 0;
let multiplier = 1;

function update() {

    document.getElementById('llama').innerText = llamaCount;
    document.title = llamaCount + 'Llamas';
    document.getElementById('clickMultiplier').innerHTML = 'Get upgrade x' + (multiplier + 1);
    document.getElementById('clickMultiplier2').innerHTML = 'x' + (multiplier + 1);
    document.getElementById('costMultiplier').innerHTML = "Cost: " + ((multiplier + 1) * 100) + ' llamas';
    document.getElementById('currentMultiplier').innerHTML = 'You current multiplier is x' + (multiplier);
    document.getElementById('autoClickAmount').innerHTML = "You have " + autoClick + " grass";
    document.getElementById('costCompanion').innerHTML = "Cost: " + ((autoClick + 1) * 100) + " llamas";
    document.getElementById('llamasPerSecond').innerHTML = (autoClick * multiplier) + " llamas per second"
}


// timer 1000ms (one second)//
function timer() {
    llamaCount = llamaCount + autoClick * multiplier;
    update();
}
setInterval(timer, 1000);


//CLicks by one//
function countClick() {
    llamaCount = llamaCount + 1;
    document.getElementById('llama').innerText = llamaCount;
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

function buyMultiplier() {
    if (llamaCount >= ((multiplier + 1) * 100)) {
        llamaCount = llamaCount - ((multiplier + 1) * 100);
        multiplier = multiplier + 1;
        update()
    }
}

function openCompanyInfo() {
    let i, tabcontent, tablinls;
    tabcontent = document.getElementById("tabcontent");
    for( i = 0; i < tabcontent.lenght; i++){
        tabcontent[i].style.display = 'none';
    }
    tablinks = document.getElementById('tablink');
    for(i = 0; i < tablinks.lenght; i++) {
        tablinks[i].style.backgroundColor = '';
    }
    document.getElementById('defaultOpen').style.display = 'block';
    Element.style.backgroundColor = blue;
}  
document.getElementById("defaultOpen").click();
