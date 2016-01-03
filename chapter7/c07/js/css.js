$(':header').addClass('headline');
$('li:lt(3)').hide().fadeIn(1500);
$('li').on('click', function(){
	$(this).remove();
});

$('p:contains("look!")').hide();

$('li:nth-child(2)').hide();

$(document).ready(function(){
	$(':hidden').fadeIn(1500);
});

$(function(){
	$('li#one').attr('id','ten');
})