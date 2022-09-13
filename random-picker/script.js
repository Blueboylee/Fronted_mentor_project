const tags = document.getElementById('tags')
const textarea = document.getElementById('text')

textarea.focus();

textarea.addEventListener('keyup', (e)=>{
    createTags(e.target.value);

    if(e.key === 'Enter'){
        setTimeout(()=>{
            e.target.value = ''
        }, 10)
        randomSelect();
    }
})

function createTags(input){
    const allTags = input.split(',').filter(tag => tag.trim() !== '')
    .map(tag => tag.trim())

    tags.innerHTML = '';

    allTags.forEach(tag => {
        const addTag = document.createElement('span');
        addTag.classList.add('tag');
        addTag.innerText = tag;
        tags.appendChild(addTag);
    })
}

function randomSelect(){
    const wait = 30;
    const interval = setInterval(()=>{
        const randomTag = pickRandomTag()

        if(randomTag !== undefined){
            activeTag(randomTag);
            setTimeout(()=>{
                 sleepActiveTag(randomTag);
            }, 100)
        }
    }, 100)

    setTimeout(()=>{
        clearInterval(interval);
        setTimeout(()=>{
            const randomTag = pickRandomTag()
            activeTag(randomTag)
        },100)
    }, wait * 100)
}


function pickRandomTag(){
    const tagst = document.querySelectorAll('.tag')
    return tagst[Math.floor(Math.random() * tagst.length)]

}
function activeTag(tag){
    tag.classList.add('active');
}
function sleepActiveTag(tag){
    tag.classList.remove('active');
}
