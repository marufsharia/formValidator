/*
This file created by Arthur Systems
http://arthur.systems/
YouTube Channel:
https://www.youtube.com/c/ArthurSystems
© 2016
*/

$(function(){
	'use strict';
	
	var regexes = {
		email: 	/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
		password: /^([a-zA-Z0-9@#$%^&+=*.\-_ ]){6,}$/,
		tel: /^[0-9]{5,20}$/,
	};
	
	$.each($('.register fieldset input:not([type="submit"])'), function() {
		$(this).on('focusout', function(){
			if(!regexes[$(this).attr('name')].test($(this).val())){
				$(this).addClass('error');
			} else {
				$(this).removeClass('error');
			}
		});
	});
});