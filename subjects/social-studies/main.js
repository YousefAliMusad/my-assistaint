let inp = document.querySelector(".inp");
let ul = document.querySelector("ul");
let items = document.querySelector(".items");
let add = document.querySelector(".button");
let Delete = document.querySelector(".delete");
let confirmZone = document.querySelector(".fa-confirm")
let confirm = document.querySelector(".fa-confirm")
let accept = document.querySelector(".agree")
let refuse = document.querySelector(".refuse")
var vals = JSON.parse(localStorage.getItem("item5")) ? JSON.parse(localStorage.getItem("item5")) : [];
const data = JSON.parse(localStorage.getItem("item5")) ? JSON.parse(localStorage.getItem("item5")) : [];

var itam_rank = JSON.parse(localStorage.getItem("item-rank5")) ? JSON.parse(localStorage.getItem("item-rank5")) : [];
const data_rank = JSON.parse(localStorage.getItem("item-rank5")) ? JSON.parse(localStorage.getItem("item-rank5")) : [];


function creteLi(val , Valrank) {
    var item = document.createElement("div");
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
    if (inp.value != "") {
        for(let i = 0; i <= vals.length ; i++) {
            var rank = i
        }
        itam_rank.push(rank)
        itam_rank.push(rank)
        vals.push(inp.value)
        vals.push(inp.value)
        localStorage.setItem("item5", JSON.stringify(vals))
        creteLi(inp.value , rank)
        inp.value = ""
        // console.log(vals.includes("غايب"))
    }
}




Delete.onclick = function(){
    confirmZone.style.cssText = "display:flex"
}
refuse.onclick = function() {
    confirmZone.style.cssText = "dispaly:none"
}
accept.onclick = function() {
    confirmZone.style.cssText = "display:none"
    localStorage.removeItem("item5")
    localStorage.removeItem("item-rank5")
    items.innerHTML = ""
    vals = []
}