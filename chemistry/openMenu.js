// JavaScript Document
$(document).ready(function(){
	$("h2").click(function(){
		$(this).toggleClass("minus");
		if ($(this).attr("class") != "minus") {
			$(this).next().hide();
		}else {
			$(this).next().show();
		}
	});
});