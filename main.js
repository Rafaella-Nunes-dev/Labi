$(document).ready(function(){
    $("#sobre").click(function(){
        $(this).css("color", "green");
        $("#equipe-info").hide();
        $("#sobre-info").show();
        $("#agenda-info").hide();
        $("#sobre-info").css("color", "green");
        $("h1").css("color", "green");
        $("body").css("background-color", "darkolivegreen")
    });

     $("#equipe").click(function(){
        $(this).css("color", "blue");
        $("#sobre-info").hide();
        $("#agenda-info").hide();
        $("#equipe-info").show();
        $("h1").css("color", "blue");
        $("h1 border").css("color", "blue");
        $("#equipe-info").css("color", "lightskyblue");
        $("body").css("background-color", "rgb(2, 54, 88)")
    });

    $("#agenda").click(function(){
        $(this).css("color", "red");
        $("#sobre-info").hide();
        $("#equipe-info").hide();
        $("#agenda-info").show();
        $("h1").css("color", "#8f0c0c");
        $("h3").css("color", "#8f0c0c");
        $("h1 border").css("color", "red");
        $("#equipe-info").css("color", "darkred");
        $("body").css("background-color", "rgb(56, 0, 0)")
    });
});
