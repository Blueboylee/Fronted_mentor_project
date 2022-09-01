const bg = document.querySelector('.bg');
const text = document.querySelector('.text');


let num = 0;
let int = setInterval(blur, 30);

function blur(){
    num++;
    if(num > 99){
        clearInterval(int);
    }

    text.innerText = `${num}%`
    text.style.opacity = scale(num, 0, 100, 1,0);
    bg.style.filter = `blur(${scale(num,0,100,30,0)}px)`
    
}


function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}