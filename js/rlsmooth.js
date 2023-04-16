/*
* Author: Rodrigo Ludgero http://rodrigoludgero.com/ $ Joe Szalai https://www.joeszalai.org
*
* Description: A jQuery flowing effect plugin
*
* License: MIT licensed
*
* Project: jQuery rlSmooth Plugin https://github.com/JoeSz/rlsmooth
* Forked: https://github.com/Rodrigo-Ludgero
*
*
*/

(function( $ ) {

	$.fn.rlSmooth = function(method, options) {

		var $this = $(this);

		var settings = $.extend({

			in: 0, //pixel default settings for vertical window position to in
			out: $(document).height(), //pixel default settings for vertical window position to out
			on: 500, // ms default settings effect speed
			off: 500 // ms default settings effect speed

		}, options);

		var fxs = {

			init : function() { // defaults settings
				return this.each(function() {

					$(window).scroll(function() {

						if ($(window).scrollTop() > settings.in && $(window).scrollTop() < settings.out) {
							$this.slideDown(settings.on);
						}
						else {
							$this.slideUp(settings.off);
						}

					});

				});
			},

			slide : function() {
				return this.each(function() {

					$(window).scroll(function() {

						if ($(window).scrollTop() > settings.in && $(window).scrollTop() < settings.out) {
							$this.slideDown(settings.on);
						}
						else {
							$this.slideUp(settings.off);
						}

					});

				});
			},

			slideOut : function() {
				return this.each(function() {

					$(window).scroll(function() {

						if ($(window).scrollTop() > settings.in && $(window).scrollTop() < settings.out) {
							$this.slideDown(settings.on);
						}
						else {
							$this.fadeOut(settings.off);
						}

					});

				});
			},

			slideHide : function() {
				return this.each(function() {

					$(window).scroll(function() {

						if ($(window).scrollTop() > settings.in && $(window).scrollTop() < settings.out) {
							$this.slideDown(settings.on);
						}
						else {
							$this.hide(settings.off);
						}

					});

				});
			},

			fade : function() {
				return this.each(function() {

					$(window).scroll(function() {

						if ($(window).scrollTop() > settings.in && $(window).scrollTop() < settings.out) {
							$this.fadeIn(settings.on);
						}
						else {
							$this.fadeOut(settings.off);
						}

					});

				});
			},

			fadeUp : function() {
				return this.each(function() {

					$(window).scroll(function() {

						if ($(window).scrollTop() > settings.in && $(window).scrollTop() < settings.out) {
							$this.fadeIn(settings.on);
						}
						else {
							$this.slideUp(settings.off);
						}

					});

				});
			},

			fadeHide : function() {
				return this.each(function() {

					$(window).scroll(function() {

						if ($(window).scrollTop() > settings.in && $(window).scrollTop() < settings.out) {
							$this.fadeIn(settings.on);
						}
						else {
							$this.hide(settings.off);
						}

					});

				});
			},

			showHide : function() {
				return this.each(function() {

					$(window).scroll(function() {

						if ($(window).scrollTop() > settings.in && $(window).scrollTop() < settings.out) {
							$this.show(settings.on);
						}
						else {
							$this.hide(settings.off);
						}

					});

				});
			},

			showUp : function() {
				return this.each(function() {

					$(window).scroll(function() {

						if ($(window).scrollTop() > settings.in && $(window).scrollTop() < settings.out) {
							$this.show(settings.on);
						}
						else {
							$this.slideUp(settings.off);
						}

					});

				});
			},

			showOut : function() {
				return this.each(function() {

					$(window).scroll(function() {

						if ($(window).scrollTop() > settings.in && $(window).scrollTop() < settings.out) {
							$this.show(settings.on);
						}
						else {
							$this.fadeOut(settings.off);
						}

					});

				});
			}

		};

	 // Method calling logic
		if ( fxs[method] ) {
			return fxs[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
		} else if ( typeof method === 'object' || ! method ) {
			return fxs.init.apply( this, arguments );
		} else {
			$.error( 'Method ' +  method + ' does not exist on jQuery.smooth' );
		}

	};


})( jQuery );
