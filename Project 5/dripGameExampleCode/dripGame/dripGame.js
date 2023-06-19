window.onload = start;

var water = 0;
var modifier = 1;
var happyMod=0;


function start() {
    document.getElementById("tap").onclick = dripWater;
    document.getElementById("card1").onclick = getcard1;
    document.getElementById("card2").onclick = getcard2;
    document.getElementById("deadcard").onclick = getdeadcard;

}

function displayWaterNum(numWater) {
    document.getElementById("display").innerHTML = "Water: " + numWater + "<br><br>";
}

function getcard1() {

    modifier += 9;
    document.getElementById("card1").enable = true;
    document.getElementById("waterdrop").src="waterspout.png";
}

function getcard2() {

    modifier -= 9; 
    document.getElementById("card2").enable = true; 
}

function getdeadcard(){
    window.location.href = "endPage.html";
}


function dripWater() {
    water += modifier;
    displayWaterNum(water);


    if (water >= 10) {
        document.getElementById("card1").hidden = false;
        document.body.style.backgroundImage = "url('bg2.png')";
        document.getElementById("instruction1").hidden = false;
    }

    if (water >= 35) {
        document.getElementById("card2").hidden = false;
    }

    if (water >= 65) {
        document.body.style.backgroundImage = "url('bg3.png')";
        document.getElementById("instruction1").hidden = true;
        document.getElementById("instruction2").hidden = false;

    }
    if (water >= 100) {
        document.body.style.backgroundImage = "url('bg4.png')";
    }

    if (water >= 150) {
        document.body.style.backgroundImage = "url('bg6.png')";
        document.getElementById("deadcard").hidden = false;
        document.getElementById("instruction2").hidden = true;
        document.getElementById("instruction3").hidden = false;
    }
}