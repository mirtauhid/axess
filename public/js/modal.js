$(function(){
    
    $('.open-modal').click(function(){
        var modalName = $(this).attr('data-modal');
        $('.modal').removeClass('active');
        $(modalName).addClass('active');
        console.log(modalName);
    });

    $('.close-modal').click(function(){
        $('.modal').removeClass('active');
    });

});