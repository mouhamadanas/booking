$(function(){
    $(".choose-booking ul li").on("click",function(){
        $(".choose-booking ul li").css({
            "border":"none",
            "border-radius":"50%",
        });
        $(this).css({
            "border":"2px solid #817039",
            "border-radius":" 50% 50% 0 0 ",
        })
    });
    $(".icon-hamburger").on("click",function(){
        $("header nav ").slideDown();
        $("header nav").css({
            "position": "absolute",
            "color": "black",
            "background-color": "rgb(37, 37, 37)",
            "width": "70%",
            "text-align": "center",
            "padding":"0px",
            "margin":"10px auto",
            "top":"90px",
            "border-radius":"20px",
            "margin-left":"14%"
        });
        $(this).css("display","none");
        $(".icon-close").css("display","flex");
    });
    $(".icon-close").on("click",function(){
        $(this).css("display","none");
        $(".icon-hamburger").css("display","flex");
        $("header nav ").css("display","none")
    });

    $(see).on("click",function(){
        $(".choose-booking .content > div .cen-content p").slideDown();
    }); 

});