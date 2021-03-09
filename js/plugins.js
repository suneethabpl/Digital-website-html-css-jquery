function myFunction(x)
{
    x.classList.toggle("change");
}
$(document).ready(function(){
    $(".icon_menu").click(function(){
        $(".menu").slideToggle("slow");
    });
});
function myFunction(x){
    x.classList.toggle("change");
}
$(document).ready(function(){
    $(".strip_menu").click(function(){
        $(".digital_options").slideToggle("slow");
    });
});
$(window).scroll(function(){
    if($(this).scrollTop()>100){
        $('#btn-scrollup').fadeIn();
    }
    else{$('#btn-scrollup').fadeOut();
}
});
$('#btn-scrollup').click(function(){
    $("html, body").animate({scrollTop:0},600);
    return false;
});
var acc=document.getElementsByClassName("accordion");
var i;for(i=0;i<acc.length;i++){
    acc[i].onclick=function(){
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
    }
}
// setTimeout(function(){
//     console.log($('iframe#siqiframe').contents().find('.flogo').hide());
// },2000);
//footer year
// var currentYear = (new Date).getFullYear();
// $("#year").html(currentYear);