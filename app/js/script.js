const btnHbger = document.querySelector('#btnHbger');

btnHbger.addEventListener('click', function() {
    console.log('click');
    if(btnHbger.classList.contains('open')) {
        btnHbger.classList.remove('open');
    } else {
         btnHbger.classList.add('open');
    }
   
});