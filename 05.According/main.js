let UL=document.querySelectorAll('#accordion li');

UL.forEach((li) => {
let labelElement = li.querySelector('label');
let span = labelElement.querySelector('span');
let input = li.querySelector('input[type="radio"]');

input.addEventListener('change', (event) => {

    UL.forEach((otherLi) => {
        if (otherLi !== li) {
            let otherInput = otherLi.querySelector('input[type="radio"]');
            otherInput.checked = false;
            let otherSpan = otherLi.querySelector('span');
            otherSpan.style.transform = 'none';
        }
    });

    if(event.target.checked){
        event.target.checked=true;
        span.style.transform = 'rotate(-90deg)';
        span.style.transition = 'all .5s';
    } else {
        span.style.transform = '90deg'; // Réinitialiser la transformation
        span.style.color = 'black'; // Réinitialiser la couleur
    }
});
})
