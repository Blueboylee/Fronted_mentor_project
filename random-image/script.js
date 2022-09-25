const img = document.querySelector('.container');
const url = 'https://source.unsplash.com/random/'
const row = 10

for(let i = 0;i<row *3;i++){
    const temp = document.createElement('img')
    temp.src = `${url}${ranSize()}`
    img.appendChild(temp);
}


function ranSize(){
    return `${randomNum()}x${randomNum()}`;
}

function randomNum(){
    return Math.floor(Math.random()* 10) +300;
}