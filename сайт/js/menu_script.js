$(function(){
    
    var $burger = $('.menu-button');
    
    var $menu = $('.menu-list');
    
    $burger.click(function(){

        if($menu.hasClass('active')){
        
            $menu.slideDown('normal').removeClass('active');
        }
        else{
            
            $menu.slideUp('normal').addClass('active');
        }
    });

