const box = document.querySelectorAll('.box');


window.addEventListener('scroll', scrollFunc);

function scrollFunc(){
    const curHeight = window.innerHeight / 5 * 4;
    box.forEach(box =>{
        const topBox = box.getBoundingClientRect().top;


        if(topBox < curHeight){
            box.classList.add('show')
        }else{
            box.classList.remove('show')
        }
    })
}