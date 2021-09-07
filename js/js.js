$(document).ready(function() {

	var hash = window.location.hash.substr(1);
	var href = $('#server-nav li a').each(function(){
		var href = $(this).attr('href');
		if(hash==href.substr(0,href.length-5)){
			var toLoad = hash+'.html #news-container';
			$('#news-container').load(toLoad)
		}
	});

	$('#server-nav li a').click(function(){

		var toLoad = $(this).attr('href')+' #news-container';
		$('#news-container').hide('fast',loadContent);
		$('#load').remove();
		$('#server-menu').append('<span id="load">LOADING...</span>');
		$('#load').fadeIn('normal');
		window.location.hash = $(this).attr('href').substr(0,$(this).attr('href').length-5);
		function loadContent() {
			$('#news-container').load(toLoad,'',showNewContent())
		}
		function showNewContent() {
			$('#news-container').show('normal',hideLoader());
		}
		function hideLoader() {
			$('#load').fadeOut('normal');
		}
		return false;

	});

});
