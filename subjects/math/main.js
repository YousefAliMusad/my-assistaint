let inp = document.querySelector(".inp");
let ul = document.querySelector("ul");
let items = document.querySelector(".items");
let add = document.querySelector(".button");
let Delete = document.querySelector(".delete");
var vals = JSON.parse(localStorage.getItem("item3")) ? JSON.parse(localStorage.getItem("item3")) : [];
const data = JSON.parse(localStorage.getItem("item3")) ? JSON.parse(localStorage.getItem("item3")) : [];

var itam_rank = JSON.parse(localStorage.getItem("item-rank3")) ? JSON.parse(localStorage.getItem("item-rank3")) : [];
const data_rank = JSON.parse(localStorage.getItem("item-rank3")) ? JSON.parse(localStorage.getItem("item-rank3")) : [];


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
    items.appendChild(item);
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
    localStorage.setItem("item3", JSON.stringify(vals))
    creteLi(inp.value , rank)
    inp.value = ""
}




Delete.onclick = function(){
    localStorage.removeItem("item3")
    localStorage.removeItem("item-rank3")
    items.innerHTML = ""
    vals = []
}