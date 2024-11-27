let button = document.getElementById("getFromInput");
let buttonReplace = document.getElementById("get");
let statChar = document.getElementById("numberOfChar");
let statWord = document.getElementById("numberOfWords");
let statSent = document.getElementById("numberOfSentence");
let toLower = document.getElementById("toLower");
let spaces = document.getElementById("Space");
let repChar = document.getElementById("replaceChar");
let output = document.getElementById("output");

let inputSearch = document.getElementById("inputSearch");
let inputReplace = document.getElementById("inputReplace");

button.addEventListener("click", function(){
    let input = document.getElementById("input").value;

    statChar.innerText = ` ${input.length}`;

    let wordArray = input.split(" ");
    statWord.innerText = ` ${wordArray.length}`;

    let sentArray = input.split(".");
    statSent.innerText = ` ${sentArray.length}`;

    toLower.innerText = ` ${input.toLowerCase()}`;

    spaces.innerText = ` ${wordArray.join("_")}`;

    repChar.innerText = ` ${input.replace(/[^a-zA-Z0-9]/g, '')}`;

});

buttonReplace.addEventListener("click", function(){
    let input = document.getElementById("input").value;

    output.innerText = input.replace(inputSearch.value, inputReplace.value);
});
