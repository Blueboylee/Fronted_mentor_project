const getP = document.querySelectorAll('.panel')


getP.forEach(p => {
    p.addEventListener('click', ()=>{
        removeclass();
        p.classList.add('active');
    })
});


function removeclass(){
    getP.forEach(p =>{
        p.classList.remove('active');
    })
}

