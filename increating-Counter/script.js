const number = document.querySelectorAll('.number');




number.forEach(num => {
    number.innerText = '0';

    const update = () => {
         const target = +num.getAttribute('data-target');
         const i = +num.innerText;

         const speed = target / 100;
         if( i < target){
            num.innerText = `${Math.ceil(i + speed)}`
            setTimeout(update, 1);
         }else{
            num.innerText = target;
         }
    }
    update();
})