let a = document.querySelector('.hour');
let b = document.querySelector('.minute');
let c = document.querySelector('.second');

let ticking = function(){
    let currentDate = new Date();
   
   
    let gethour = currentDate.getHours();
    
    let getminutes = currentDate.getMinutes();
    
    let getsec = currentDate.getSeconds();

     
    a.textContent=gethour;
    b.textContent=getminutes;
    c.textContent=getsec;
    
}

setInterval(ticking,1000);