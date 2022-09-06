const text = document.querySelector('.main')
const textbtn = document.querySelector('.btn')


textbtn.addEventListener('click', jokes)

jokes();

async function jokes(){
    const config = {
        headers: {
            'Accept':'application/json',
        }
    }
    const res = await fetch('https://icanhazdadjoke.com',config);
    const data = await res.json()
    text.innerHTML = data.joke
}