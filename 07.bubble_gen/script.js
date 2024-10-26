const setBubble= () => {
const body = document.querySelector('body')
const span = document.createElement('span')

let size = Math.floor(Math.random()* 100);
// console.log(size)
span.style.width= size +'px'
span.style.height= size + 'px'
span.style.left= Math.random()* innerWidth + 'px'
body.appendChild(span);
// console.log(span)

setTimeout(() => {
    span.remove()
},4000)
}

setInterval(setBubble,50)
