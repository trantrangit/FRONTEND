$(function () {

    $(window).resize(function(){
        location.reload(true);
    });
    var width=window.innerWidth;


    if(width>1240)
    {
        $("#background-video").css("height","1200px");
        $(".media").css("width","50%");

    }

    if(width<1217)
    {

        $("#background-video").css("height","700px");
        $("#logo").css("margin-left","70px");
        $(".login-laguage").css("right","15%");
        $("h1").css("font-size","1em");
        $("h2").css("font-size","0.8em");
        $(".login-laguage").css("right","0");
        $(".media").css("width","50%");
    }
    if(width<1024) {
        $("#img-header").css("display","none");
        $(".media").css("width","auto");
    }
    if(width<900)
    {

        $(".login-laguage").css({"padding-top":"4px","right":"0"});
        $(".dropdown-menu-change").css({"right":"10%","left":"auto"
        });


    }
    if(width<867)
    {

        $(".login-laguage").css("right","0");

    }
    if(width<834)
    {


    }
    if(width<=768)
    {
        $("#s-header").css("height","1000px");
        $(".icon-log").css("margin-right","-5px");
    }
    if(width<668)
    {



    }
    if(width<589)
    {


        $(" .list-languages").css("min-width","12rem");
        $(".icon-lang").css("width","30px");

    }
    if(width<570)
    {
        $(".mobile").css("display","none");
        $(".box-search").css("top","40%");



    }
    var placeholderText = [
        "Từ vựng?",
        "Ngữ pháp?",
        "Chào hỏi?",
        "Giao tiếp?",
        "Học phát âm?",
        "Đọc báo song ngữ?",
        "Học theo chủ để"
    ];
    $('#input-search').placeholderTypewriter({text: placeholderText});
    var heightVideo=$('#background-video').innerHeight();
    $("#svg-header").css("height",heightVideo);
    $("#rect-video").css("height",heightVideo);
    $(".col-img img").css({
        "height":"200px",
        "width":"100%"
    });
    $(".col-text:eq(1)").css(
        {
            "background":"#FFD700",

        }
    )
  //  var width_img_introduce=$(".img-introduce").innerWidth();

    $(".img-introduce").css(
        {
            "width":"150px",
            "height":"150px"
        }
    );


})

