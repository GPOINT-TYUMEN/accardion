$(function () {
	var accardion = {
		speed: 200
	};

	$('.accardion-item .accardion-toggle').on('click', function () {
		var accardionItem = $(this).parent();
		var speed = $(accardionItem).attr('speed') || accardion.speed;
	
		$('.accardion-content', accardionItem).slideToggle(parseInt(speed));
	});
});