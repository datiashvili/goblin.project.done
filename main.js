const b1 = document.querySelector('.b1')
console.log(b1)

const body = document.querySelector('body')
const hh2 = document.querySelector(".hh2")


b1.addEventListener('click', () => {
    body.style.background = 'url(./ghost.jpg)'
    body.style.backgroundRepeat = "no-repeat"
    hh2.textContent = 'WIZARD'
    b1.style.backgroundColor = 'purple'
    // body.style.height = "100vh"
    // body.style.backgroundSize = "cover"

})

const b2 = document.querySelector('.b2')
console.log(b2)

b2.addEventListener('click', () => {
    body.style.background = 'url(./goblin.png)'
    body.style.backgroundRepeat = "no-repeat"
    hh2.textContent = 'GOBLIN'
    b1.style.backgroundColor = 'green'
    // body.style.height = "100vh"
    // body.style.backgroundSize = "cover"

})
