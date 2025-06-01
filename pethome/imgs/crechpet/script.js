$(document).ready(function(){
    $('#mobile-btn').on('click',function()
    {
        $('#mobile-menu').toggleClass('active');
        $('#mobile-btn').find('i').toggleClass('fa-x');
    })
    const section =$('section');
    const navItems=$('nav-item');

    $(window).on('scroll',function(){
        const header=$('header');
        
        const scrollposition= $(window).scroollTop()-header.outerHeight();
         let activeSectionIndex= 0;
        if(scrollposition <=0){
            header.css('box-shadow', 'none');
        }else{
            header.css('box-shadow','5px 1px 5px rgba (0,0,0.1');
        }
        section.each(function(i)){
            const section= $(this);
            const sectionTop= section.offset().top-96;
            const sectionBottom = sectionTop+ section.outerHeight();
            if( scrollposition >= sectionTop && scrollposition < sectionBottom){
                activeSectionIndex = i;
                return false;
            }
        }
        navItems.removeClass('active')
        $(navItems[activeSectionIndex]).addClass('active');
    

    });
    ScrollReveal().reveal('#cta',{
        origin:'left',
        duration:2000,
        distance:'20%',
    })
    ScrollReveal().reveal('.dish',{
        origin:'left',
        duration:2000,
        distance:'20%',
    })

})
