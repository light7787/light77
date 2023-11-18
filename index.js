const counterEl = document.getElementById("counter");
const saveEl=document.getElementById("saveid");
let countlap = 0;

function increment(){
    countlap+=1;
    counterEl.innerText=countlap;
    console.log(countlap);

}
function save(){
    let saved = countlap + " - ";
    saveEl.textContent+=saved;
    countlap = 0;
    counterEl.innerText=countlap;

}
