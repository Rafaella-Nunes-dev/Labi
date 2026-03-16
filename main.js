$(document).ready(function(){
    $("#sobre").click(function(){
        $(this).css("color", "green");
        $("#equipe-info").hide();
        $("#sobre-info").show();
        $("#sobre-info").css("color", "green");
        $("h1").css("color", "green");
        $("body").css("background-color", "darkolivegreen")
    });


     $("#equipe").click(function(){
        $(this).css("color", "blue");
        $("#sobre-info").hide();
        $("#equipe-info").show();
        $("h1").css("color", "blue");
        $("h1 border").css("color", "blue");
        $("#equipe-info").css("color", "lightskyblue");
        $("body").css("background-color", "rgb(2, 54, 88)")
    });
});
