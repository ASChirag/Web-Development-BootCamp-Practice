$('h1').addClass("big-title margin");
console.log($('h1').hasClass('big-title'));

$('h1').text('Hello !');

if ($('h1').hasClass('margin') == true){
    console.log('Yea it is on');
}

console.log($("img").attr('src'));

$("button").click(function(){
    changeColor();
});

$(document).keypress(function(event){
    $('h1').text(event.key);
});

$('h1').click(function(){
    changeColorBack();
});

function changeColor(){
    $("h1").css("color", 'darkgreen');
}

function changeColorBack(){
    $("h1").css("color", 'black');
}


$("#logo").on("mouseenter", function(){
    $("#logo").animate({
        width : "500px"
    }, 2000)
})

$("#logo").on("mouseleave", function(){
    $('#logo').animate({
        width : "800px"
    }, 2000)
})

$("button").on("click", function(){
    $("h1").slideToggle()
});

$(".load").delay(3000).slideToggle(1400);