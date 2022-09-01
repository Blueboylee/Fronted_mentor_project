const bg = document.querySelector('.bg');
const text1 = document.querySelector('.text');


let num = 0;
let int = setInterval(blur, 10);
function blur(){
    num++;
    if(num > 99){
        clearInterval(int);
    }
    text1.innerText = `${num}%`
    text1.style.opacity = scale(num,0, 100, 1, 0);
    bg.style.filter = `blur(${scale(num, 0, 100, 30, 0)}px)`
}

function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}