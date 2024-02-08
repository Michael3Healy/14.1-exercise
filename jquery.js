$(document).ready(function () {
	console.log("Let's get ready to party with jQuery!");
});

$('article img').addClass('image-center');

$('p').eq(-1).remove();

$('#title').css('font-size', Math.floor(Math.random() * 101) + 'px');

$('ol').append('<li>Hi this is Michael</li>');

$('aside').html("<p>I'm really sorry for that stupid list</p>")

$('input').on('keyup blur change', function(e) {
    $('body').css('background-color', `rgb(${$('input').eq(0).val()}, ${$('input').eq(1).val()}, ${$('input').eq(2).val()})`);
})

$('img').on('click', function(e) {
    $(this).remove();
})




