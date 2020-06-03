$(document).ready(function(e){
    $win = $(window);
    $navbar = $('#header');
    $toggle = $('.toggle-button');
    var width = $navbar.width();
    toggle_onclick($win,$navbar,width);

    $win.resize(function(){
        toggle_onclick($win,$navbar,width);
    });

    $toggle.click(function(e){

        $navbar.toggleClass("toggle-left");
        
    });

    $(".nav-item").on("click", function (e) {
        $(".nav-item").removeClass("active");
        console.log("$(\"li.nav-item\")  " + $("li.nav-item"));
        $(this).addClass("active");
    });
});

function toggle_onclick($win,$navbar,width){
    if($win.width()<=768){
        $navbar.css({left:`-${width}px`});
    }
    else{
        $navbar.css({left:`0px`});
    }
}

var typed = new Typed('#typed',{
    strings:[
        'Web developer','Programmer','learner'
    ],
    typeSpeed:50,
    backSpeed:50,
    loop:true
});

var typed_2 = new Typed('#typed_2' , {
    strings: [
        'Passionate',
        'Team player',
        'Hard worker'
    ],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
});
document.querySelectorAll('a[href^="#"]').forEach(anchor =>{
    anchor.addEventListener('click', function(e){
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});