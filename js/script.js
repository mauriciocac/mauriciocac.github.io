$(document).ready(function(){
    $('.img-toggle').on('click', function(){ 
        $('.ul-item').toggleClass('isToggled');
    });
    
    $('.ul-item li a').on('click', function(){ 
        $('.ul-item').toggleClass('isToggled');
    });
    
});