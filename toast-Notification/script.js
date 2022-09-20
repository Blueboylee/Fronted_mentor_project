const btn = document.querySelector('.btn');
const show = document.getElementById('toasts');

const messages = [
    '1',
    '2',
    '3',
    '4'
]

const type = [
    'info',
    'suc',
    'error'
]

btn.addEventListener('click', ()=> createDiv())

function createDiv(){
    const temp = document.createElement('div');
    temp.classList.add('toast');
    temp.classList.add(getRandomType());

    temp.innerText = getRandomMessage();
    show.appendChild(temp)
    setTimeout( ()=>{
        show.remove(temp)   
    }, 3000)
}

function getRandomType(){
    return type[Math.floor(Math.random() * type.length)]
}

function getRandomMessage(){
    return messages[Math.floor(Math.random() * messages.length)]
}