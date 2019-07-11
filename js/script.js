$(document).ready(function () {
    alert('Esta página encontra-se em desenvolvimento. Algumas informações são fictícias.')
    $('.img-toggle, .ul-item li a').on('click', function () {
        $('.ul-item').toggleClass('isToggled');
    });
     
});