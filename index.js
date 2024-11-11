$("span").mouseover(function(){
    $(".rectangular_image").fadeOut(100).fadeIn(100);
});

$("button").click(function(){
    $("h1").text("You clicked on my contact button! Please do not forget to send a message.");
    textTimeOut();
});

function textTimeOut() {
    setTimeout(function(){
        $("h1").text("I am Promise Onuorah")
    }, 8000);}

$("button").touchstart(function(){
    $("h1").text("You clicked on my contact button! Please do not forget to send a message.");
    textTimeOut();
});

$("span").touchstart(function(){
    $(".rectangular_image").fadeOut(100).fadeIn(100);
});