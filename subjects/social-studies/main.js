let inp = document.querySelector(".inp");
let ul = document.querySelector("ul");
let items1 = document.querySelector(".items");
let add = document.querySelector(".button");
let Delete1 = document.querySelector(".delete");
var vals = JSON.parse(localStorage.getItem("item5")) ? JSON.parse(localStorage.getItem("item5")) : [];
const data = JSON.parse(localStorage.getItem("item5")) ? JSON.parse(localStorage.getItem("item5")) : [];

var itam_rank = JSON.parse(localStorage.getItem("item-rank5")) ? JSON.parse(localStorage.getItem("item-rank5")) : [];
const data_rank = JSON.parse(localStorage.getItem("item-rank5")) ? JSON.parse(localStorage.getItem("item-rank5")) : [];


function creteLi(val , Valrank) {
    let item = document.createElement("div");
    item.className = "item"
    let cont = document.createElement("div");
    cont.className = "cont"
    item.appendChild(cont);
    let grade = document.createElement("div");
    grade.className = "grade"
    grade.textContent = `${Valrank + 1} - `
    let date = document.createElement("div");
    date.textContent = val;
    date.className = "date"
    cont.appendChild(grade);
    cont.appendChild(date);
    items1.appendChild(item);
}
data.map(function(item , rVal){
    creteLi(item , rVal)
})

add.onclick = function(){
    for(let i = 0; i <= vals.length ; i++) {
        var rank = i
    }
    itam_rank.push(rank)
    vals.push(inp.value)
    localStorage.setItem("item5", JSON.stringify(vals))
    creteLi(inp.value , rank)
    inp.value = ""
}




Delete1.onclick = function(){
    localStorage.removeItem("item5")
    localStorage.removeItem("item-rank5")
    items1.innerHTML = ""
    vals = []
}