const popup = document.querySelector('.popup')
const span =document.querySelector('span')
const bubble =document.querySelector('.bubble')


document.querySelector('button').addEventListener('click', () => {
    popup.classList.add('active')
})

span.addEventListener('click', () =>{
    popup.classList.remove('active')

});

window.addEventListener('mousemove', (e) => {
    bubble.style.left=e.pageX + "px"
    bubble.style.top=e.pageY + "px"
})