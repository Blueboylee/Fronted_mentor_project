const btns = document.querySelectorAll('.btn');

btns.forEach(btn =>{
    btn.addEventListener('click', function(e) {
        const x = e.clientX
        const y = e.clientY

        const boxX = e.target.offsetTop
        const boxY = e.target.offsetLeft


        const inX = x - boxY
        const inY = y - boxX

        const span = document.createElement('span')
        span.classList.add('circle')
        span.style.top = inY + 'px'
        span.style.left = inX + 'px'
        console.log(inX,inY)
        this.appendChild(span)
        setTimeout(()=> span.remove(span), 350)
    })
})