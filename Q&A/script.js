const state = document.querySelectorAll('.faq-toggle')


state.forEach(e =>{
    e.addEventListener('click', ()=>{
        e.parentNode.classList.toggle('active');
    })
})