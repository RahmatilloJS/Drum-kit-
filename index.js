const buttons = document.querySelectorAll('.drum')
let audio = new Audio('./sounds/crash.mp3')


buttons.forEach(button=>{
    button.addEventListener('click', e=>{
        const textBtn  = button.classList[0]
        playMusic(textBtn)
        animateBtn(textBtn)
    })
})

document.addEventListener('keydown', e=>{
    const key = e.key
    playMusic(key)
    animateBtn(key)
})

function playMusic(key){
    switch (key) {
        case "w":
            audio = new Audio('./sounds/crash.mp3')
            audio.play()
            break;
        case "a":
            audio = new Audio('./sounds/kick-bass.mp3')
            audio.play()
            break;
        case "s":
            audio = new Audio('./sounds/snare.mp3')
            audio.play()
            break;
        case "d":
            audio = new Audio('./sounds/tom-1.mp3')
            audio.play()
            break;
        case "j":
            audio = new Audio('./sounds/tom-2.mp3')
            audio.play()
            break;
        case "k":
            audio = new Audio('./sounds/tom-3.mp3')
            audio.play()
            break;
        case "l":
            audio = new Audio('./sounds/tom-4.mp3')
            audio.play()
            break;
        default:
            console.log(key);
    }
}

function animateBtn(key){
    let clasBtn = document.querySelector(`.${key}`)
    clasBtn.classList.add('pressed')
    setInterval(() => {
        clasBtn.classList.remove('pressed')
    }, 100);
}