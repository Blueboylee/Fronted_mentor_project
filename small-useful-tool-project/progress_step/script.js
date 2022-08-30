const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
const circles = document.querySelectorAll('.circle')
const pg = document.querySelector('#progress');


let origin = 1;
next.addEventListener('click', ()=>{
    origin += 1;
    if(origin > circles.length){
        origin = circles.length;
    }

})



prev.addEventListener('click', ()=>{
    origin -= 1;
    if(origin < 1){
        origin = 1;
    }

})



