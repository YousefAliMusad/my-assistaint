let dateyear = new Date().getFullYear() ;
let datemonth = new Date().getMonth()  + 1;
let dateday = new Date().getDate();
let Year =  document.querySelector(".year").innerHTML = dateyear
let Month = document.querySelector(".month").innerHTML = datemonth
let Day =  document.querySelector(".day").innerHTML = dateday


console.log(dateyear)
console.log(datemonth)
console.log(dateday)