$(window).resize(function () { 
    $('body').css('padding-top', parseInt($('#main-navbar').css("height"))+10);
});


$(document).ready(function()
{
	$('body').css('padding-top', parseInt($('#main-navbar').css("height"))+10); 
});

$(function () {
	  $('[data-toggle="tooltip"]').tooltip()
	});

$(function () {
	  $('[data-toggle="popover"]').popover()
	});