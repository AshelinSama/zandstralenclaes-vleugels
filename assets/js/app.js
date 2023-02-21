$(function() {
    Cufon.replace('.eras');

    $(".eras a").hover(function(){
        Cufon.replace('.eras');
    }, function(){
        Cufon.replace('.eras');
    });

    $("#thumbs a").click(function(){
        $("#big img").attr("src", $(this).attr("href"));
        $("#big p").html($("p", $(this)).html());
        $("#thumbs .selected").removeClass("selected");
        $(this).addClass("selected");
        if($("#big p").html() == ""){
            $("#big p").hide();
        }else{
            $("#big p").show();
        }
        return false;
    });

    $("#next_big").click(function(){
        var current = $("#thumbs .selected");
        var next = current.next();
        next.addClass("selected");
        current.removeClass("selected");
        $("#big img").attr("src", next.attr("href"));
        $("#big p").html($("p", next).html());

        if(next.next().get(0) == undefined){
            $("#next_big").hide();
        }else{
            $("#next_big").show();
        };
        if(next.prev().get(0) == undefined){
            $("#prev_big").hide();
        }else{
            $("#prev_big").show();
        };
    });

    $("#prev_big").click(function(){
        var current = $("#thumbs .selected");
        var next = current.prev();
        next.addClass("selected");
        current.removeClass("selected");
        $("#big img").attr("src", next.attr("href"));
        $("#big p").html($("p", next).html());

        if(next.prev().get(0) == undefined){
            $("#prev_big").hide();
        }else{
            $("#prev_big").show();
        };
        if(next.next().get(0) == undefined){
            $("#next_big").hide();
        }else{
            $("#next_big").show();
        };
    });

    $("#next").click(function(){
        var value = parseInt($("#thumbs").css("left")) - 720;
        if(value < -$("#thumbs").width() + 960){
            value = -$("#thumbs").width() + 960;
        }
        if(value > 0){
            value = 0;
        }

        $("#thumbs").animate({
            left: value
        }, 500);

        checkArrows(value);
    });
    $("#prev").click(function(){
        var value = parseInt($("#thumbs").css("left")) + 720;
        if(value < -$("#thumbs").width() + 960){
            value = -$("#thumbs").width() + 960;
        }
        if(value > 0){
            value = 0;
        }

        $("#thumbs").animate({
            left: value
        }, 500);

        checkArrows(value);
    });
})

function checkArrows(value){
    if(value == 0){
        $("#prev").fadeOut();
    }else{
        $("#prev").fadeIn();
    }
    if(value == -$("#thumbs").width() + 960){
        $("#next").fadeOut();
    }else{
        $("#next").fadeIn();
    }
}