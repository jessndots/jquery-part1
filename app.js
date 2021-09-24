$(document).ready(function(){console.log("Let's get ready to party with jQuery!")})

$("article img").addClass('image-center')

$("article p").eq(5).remove()

$("#title").css('font-size', Math.random()*100)

$("ol").append("<li>whatever you want</li>")

$("aside").empty()
$("aside").append("<p>sorry for that list</p>")

$("input").on('change', ()=>{
    $('body').css('background-color', `rgb(${$('input').val()}, ${$('input').eq(1).val()}, ${$('input').eq(2).val()})`)
})

$('img').click(function () {
    $(this).remove()
})