(function($, undefined){ 
	$(function(){
		const mainMenu = $('.main_menu');
		const mainMenuOpenBtn = $('.main_menu-openBtn');

		mainMenuOpenBtn.on('click', function(event){
			mainMenu.slideToggle();
		});
	});
})(jQuery);