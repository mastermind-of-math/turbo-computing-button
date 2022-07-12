var storage = window.localStorage;
var clicks = 0;

clicks = storage.getItem("clicknum");
document.getElementById("clickvalue").innerHTML ="You have clicked me " + clicks + " times";

function add(){
    clicks++;
    storage.setItem("clicknum", clicks);
    document.getElementById("clickvalue").innerHTML ="You have clicked me " + clicks + " times";

}

function reset(){
    clicks = 0;
    storage.setItem("clicknum", clicks);
    document.getElementById("clickvalue").innerHTML ="You have clicked me " + clicks + " times";
}