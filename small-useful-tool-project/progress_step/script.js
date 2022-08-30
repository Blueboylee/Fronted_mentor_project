const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle')
const pg = document.getElementById('progress');


let origin = 1;
next.addEventListener('click', ()=>{
    origin += 1;
    if(origin > circles.length){
        origin = circles.length;
    }
    update();

})



prev.addEventListener('click', ()=>{
    origin -= 1;
    if(origin < 1){
        origin = 1;
    }

    update();

})


function update(){
    circles.forEach((circle, idx) => {
        if(origin > idx){
            circle.classList.add('active');
        }else{
            circle.classList.remove('active');
        }
    })
    const actives = document.querySelectorAll('.active');

    pg.style.width = (actives.length-1) / (circles.length-1) * 100 + '%'
    
    
    if(origin === 1){
        prev.disabled = true;
    }else if(origin === circles.length){
        next.disabled = true;
    }else{
        prev.disabled = false;
        next.disabled = false;
    }



}
