window.addEventListener('DOMContentLoaded', () => {

    let btn = document.querySelector('.bottom__btn'),
        inputIn = document.querySelector('.bottom__input');
        
    btn.addEventListener('click', () => {
        console.log(inputIn.value);
    });
});