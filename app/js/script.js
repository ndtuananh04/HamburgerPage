const btnHbger = document.querySelector('#btnHbger');
const body = document.querySelector('body');
const header = document.querySelector('header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');

btnHbger.addEventListener('click', function() {
    console.log('click');

    if(header.classList.contains('open')) { //close menu
        body.classList.remove('noscroll');
        header.classList.remove('open');
        fadeElems.forEach(function(element) {
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        });
    } else { //open menu
        body.classList.add('noscroll');
        header.classList.add('open');
        fadeElems.forEach(function(element) {
            element.classList.remove('fade-out');
            element.classList.add('fade-in');
        });
    }
   
});