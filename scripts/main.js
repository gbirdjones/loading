'use strict';

var loading = $('#loading');
loading.html = 'Submit';


function wait() {

	$('#loading').html('Loading...').css('color', '#a5a5a5')
	setTimeout(function() {
		$('#loading').html('Submit').css('color', 'black');
	}, 3000);
}


$('#loading').on('click', wait);