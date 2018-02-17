(function($){
	"use strict";

	$(function(){

		var searchHolder = $('.search-holder');

		if (searchHolder.length) {
			searchHolder.searchClick();
		}

		// ie9 placeholder

		(function(){
			if($('html').hasClass('ie9')) {
				$('input[placeholder]').each(function(){
					$(this).val($(this).attr('placeholder'));
					var v = $(this).val();
					$(this).on('focus',function(){
						if($(this).val() === v){
							$(this).val("");
						}
					}).on("blur",function(){
						if($(this).val() == ""){
							$(this).val(v);
						}
					});
				});
				
			}
		})();

		// remove products from shopping cart
		
		$('[role="banner"]').on('click','.close_product',function(){
			$(this).closest('li').animate({'opacity':'0'},function(){
				$(this).slideUp(500);
			});
		});


		// responsive menu

		window.rmenu = function(){

			var	nav = $('nav[role="navigation"]'),
				header = $('[role="banner"]');

			var rMenu = new Object();

			rMenu.init = function(){
				rMenu.checkWindowSize();
				$(window).on('resize',rMenu.checkWindowSize);
			}

			rMenu.checkWindowSize = function(){

				if($(window).width() < 992){
					rMenu.Activate();
				}
				else{
					rMenu.Deactivate();
				}

			}
			// add click events
			rMenu.Activate = function(){
				if($('html').hasClass('md_touch')) header.off('.touch');
				header.off('click').on('click.responsivemenu','#menu_button',rMenu.openClose);
				header.on('click.responsivemenu','.main_menu li span',rMenu.openCloseSubMenu);
			}
			// remove click events
			rMenu.Deactivate = function(){
				header.off('.responsivemenu');
				nav.removeAttr('style').find('li').removeClass('current_click')
				.end().find('.sub_menu_wrap').removeAttr('style').end().find('.prevented').removeClass('prevented').end()
				if($('html').hasClass('md_touch')) header.off('click').on('click.touch','.main_menu li span',rMenu.touchOpenSubMenu);
			}

			rMenu.openClose = function(){

				$(this).toggleClass('active');
				nav.stop().slideToggle();

			}

			rMenu.openCloseSubMenu = function(e){

				var self = $(this);

				if(self.next('.sub_menu_wrap').length){
					self.parent()
						.addClass('current_click')
						.siblings()
						.removeClass('current_click')
						.children(':not(span,a)')
						.slideUp();
					self.next().stop().slideToggle();
					self.parent().siblings().children('span').removeClass('prevented');

					if(!(self.hasClass('prevented'))){
						e.preventDefault();
						self.addClass('prevented');
					}else{
						self.removeClass('prevented');
					}
				}

			}

			rMenu.touchOpenSubMenu = function(event){
				var self = $(this);

				if(self.next('.sub_menu_wrap').length){

					if(!(self.hasClass('prevented'))){
						event.preventDefault();
						self.addClass('prevented');
					}else{
						self.removeClass('prevented');
					}

				}
				
			}

			rMenu.init();
		}

		rmenu();

		// twitter feed

		if($(".tweets").length){

			var follow = $(".tweets").next('.tw_follow'),
				config = {
					username : 'fanfbmltemplate',
					modpath: 'plugins/twitter/',
					loading_text : '<img src="images/loader2.gif" alt="">',
					template : '<li><div></div><p>{text}</p><p>{time}</p></li>'
				}

			$(".tweets").each(function(){

				var self = $(this);

				if(self.hasClass('single')){
					config.template = '<li><p>{text}</p><p>{time}</p></li>';
				}
				self.tweet(config);
				if(self.hasClass('single')){
					var owl = self.data('owlCarousel');

					$('.twc_prev').on('click',function(){owl.trigger('owl.prev');});
					$('.twc_next').on('click',function(){owl.trigger('owl.next');});
				}

				var owlConfig = {
					autoPlay : true,
					autoHeight : true,
					pagination : false,
					slideSpeed : 800,
					navigation:true,
		    		navigationText:false,
					singleItem : true,
					beforeInit : function(){
						self.find('.owl-item:even').remove();
						self.find('.tweet_odd').remove();
						self.find('.tweet_text').find('a').addClass('tr_all');
					}
				}

				self.children('.tweet_list').owlCarousel(owlConfig);

			});
			follow.attr('href','https://twitter.com/'+config.username);
		}

		// twitter  

	    $(document).ready(function(){
		    jQuery('#twitter').tweet({
		        username : 'fanfbmltemplate',
				modpath: 'plugins/twitter/',
				loading_text : '<img src="images/loader2.gif" alt="">',
				template : '<li><p>{text}</p><p>{time}</p></li>'
	    	})  

		});

		// News carousel

		$(document).ready(function() {
 
		  	$("#owl-demo").owlCarousel({
		 	
		      navigation : true, // Show next and prev buttons
		      slideSpeed : 800,
		      paginationSpeed : 800,
		      autoPlay:true,
		      singleItem:true,
		      navigationText:false
		  	});
		 
		});

		// Gallery carousel

		$(document).ready(function() {
 
		  	$(".owl-demo-2").owlCarousel({
		      navigation : true, // Show next and prev buttons
		      slideSpeed : 800,
		      paginationSpeed : 800,
		      singleItem:true,
		      navigationText:false
		  	});
		 
		});

		// Gallery carousel-2

		$(document).ready(function() {
 
		  	$("#owl-demo-3").owlCarousel({
		      navigation : true, // Show next and prev buttons
		      slideSpeed : 800,
		      paginationSpeed : 800,
		      singleItem:true,
		      navigationText:false
		  	});
		 
		});

		// Gallery carousel-3

		$(document).ready(function() {
 
		  $("#owl-demo-4").owlCarousel({
		 		
		      items : 3,
		      slideSpeed : 800,
		      paginationSpeed : 800,
		      navigation : true,
		      navigationText:false,
		      itemsDesktop : [1199,3],
		      itemsDesktopSmall : [992,2],
		      itemsTablet : [769,2],
		      itemsMobile: [480,1]
		  });
		 
		});

		// Gallery carousel-4

		$(document).ready(function() {
 
		  $("#owl-demo-5").owlCarousel({
		 		
		      items : 5,
		      slideSpeed : 800,
		      paginationSpeed : 800,
		      navigation : true,
		      navigationText:false,
		      autoPlay:true,
		      itemsDesktop : [1200,5],
		      itemsDesktopSmall : [992,3],
		      itemsTablet : [769,3],
		      itemsMobile: [480,1]
		  });
		 
		});

		// Gallery carousel-5

		$(document).ready(function() {
 
		  $("#owl-demo-6").owlCarousel({
		 		
		      items : 3,
		      slideSpeed : 800,
		      paginationSpeed : 800,
		      navigation : true,
		      navigationText:false,
		      itemsDesktop : [1200,3],
		      itemsDesktopSmall : [992,3],
		      itemsTablet : [769,3],
		      itemsMobile: [480,2]
		  });
		 
		});

		// Gallery carousel-6

		$(document).ready(function() {
 
		  $("#owl-demo-7").owlCarousel({
		 		
		      items : 3,
		      slideSpeed : 800,
		      paginationSpeed : 800,
		      navigation : true,
		      navigationText: false,
		      itemsDesktop : [1200,3],
		      itemsDesktopSmall : [992,3],
		      itemsTablet : [769,3],
		      itemsMobile: [480,2]
		  });
		 
		});

		// Gallery carousel-7

		$(document).ready(function() {
 
		  $("#owl-demo-8").owlCarousel({
		 		
		      items : 1,
		      slideSpeed : 800,
		      paginationSpeed : 800,
		      navigation : true,
		      navigationText:false,
		      itemsDesktop : [1200,1],
		      itemsDesktopSmall : [992,1],
		      itemsTablet : [769,1],
		      itemsMobile: [480,1]
		  });
		 
		});

		// Gallery carousel-8

		$(document).ready(function() {
 
		  $("#owl-demo-9").owlCarousel({
		 		
		      items : 2,
		      slideSpeed : 800,
		      paginationSpeed : 800,
		      navigation : true,
		      navigationText:false,
		      itemsDesktop : [1200,1],
		      itemsDesktopSmall : [992,1],
		      itemsTablet : [769,1],
		      itemsMobile: [480,1]
		  });
		 
		});

		//===================fixed header================


		// ie9 placeholder

		(function(){
			if($('html').hasClass('ie9')) {
				$('input[placeholder]').each(function(){
					$(this).val($(this).attr('placeholder'));
					var v = $(this).val();
					$(this).on('focus',function(){
						if($(this).val() === v){
							$(this).val("");
						}
					}).on("blur",function(){
						if($(this).val() == ""){
							$(this).val(v);
						}
					});
				});
				
			}
		})();

		// tabs

		(function(){
			var tabs = $('.tabs');
			if(tabs.length){
				tabs.tabs({
					beforeActivate: function(event, ui) {
				        var hash = ui.newTab.children("li a").attr("href");
				        window.location.hash = hash;
				   	},
					hide : {
						effect : "fadeOut",
						duration : 450
					},
					show : {
						effect : "fadeIn",
						duration : 450
					}
				});
			}
		})();

		// newsletter

	    (function(){

	      var subscribe = $('[id^="newsletter"]');
	      subscribe.append('<div class="message_container_subscribe"></div>');
	      var message = $('.message_container_subscribe'),text;

	      subscribe.on('submit',function(e){
	        var self = $(this);
	        
	        if(self.find('input[type="email"]').val() == ''){
	          text = "Please enter your e-mail!";
	          message.html('<div class="alert_box warning"><p>'+text+'</p></div>')
	            .slideDown()
	            .delay(4000)
	            .slideUp(function(){
	              $(this).html("");
	            });

	        }else{
	          self.find('span.error').hide();
	          $.ajax({
	            type: "POST",
	            url: "bat/newsletter.php",
	            data: self.serialize(), 
	            success: function(data){
	              if(data == '1'){
	                text = "Your email has been sent successfully!";
	                message.html('<div class="alert_box success"><p>'+text+'</p></div>')
	                  .slideDown()
	                  .delay(4000)
	                  .slideUp(function(){
	                    $(this).html("");
	                  })
	                  .prevAll('input[type="email"]').val("");
	              }else{
	                text = "Invalid email address!";
	                message.html('<div class="alert_box error"></i><p>'+text+'</p></div>')
	                  .slideDown()
	                  .delay(4000)
	                  .slideUp(function(){
	                    $(this).html("");
	                  });
	              }
	            }
	          });
	        }
	        e.preventDefault();
	      });

	    })();

	    // open dropdown

		$.fn.css3Animate = function(element){
			return $(this).on('click',function(e){
				var dropdown = element;
				$(this).toggleClass('active');
				e.preventDefault();
				if(dropdown.hasClass('opened')){
					dropdown.removeClass('opened').addClass('closed');
					setTimeout(function(){
						dropdown.removeClass('closed')
					},500);
				}else{
					dropdown.addClass('opened');
				}
			});
		}
		$('#sort_button').css3Animate($('#sort_button').next('.sort_list'));


		// load more

		$(document).ready(function(){
		    $("#load_more").click(function(){
		        $(".load_more_block").slideToggle("slow");
		        $(this).toggleClass("active");
		        return false;
		    });
		    $(".more_news_button").click(function(){
		        $(".more_news").slideToggle("slow");
		        $(this).toggleClass("active");
		        return false;
		    });
		    
		});

		// Scroll to Top
        

		// Loader

		(function(){
			$("body").queryLoader2({
		        backgroundColor: '#fff',
		        barColor : '#ff680d',
		        barHeight: 4,
		        deepSearch:true,
		        minimumTime:1000,
		        onComplete: function(){
		        	$(".loader").fadeOut('200');
		        }
	      	});
	    })();

	    // flexslider
			
		if($(".flexslider").length){
			$(".flexslider").flexslider({
				controlNav:false,
				smoothHeight:true,
				animationSpeed:1000,
				slideshow:false,
				prevText:'',
				keyboard : false,
				nextText:'',
				start:function(el){
					var slshow = el,
						thumbnails = $('.thumbnails_container').children('ul');
					slshow.find('.flex-direction-nav a').addClass('flex_nav_buttons');
					var currIndex = slshow.data('flexslider').currentSlide;
					thumbnails.children('li').eq(currIndex).addClass('active');
					thumbnails.children('li').on('click',function(){
						var self = $(this),
							index = self.index();
						self.addClass('active').siblings().removeClass('active');
						slshow.data('flexslider').flexAnimate(index);
					});
					slshow.find('.flex-prev,.flex-next').on('click',function(){
						var ci = slshow.children('.slides').children('.flex-active-slide').index();
						thumbnails.children('li').eq(ci).addClass('active').siblings().removeClass('active');
					});
				}
			});
		}

		if($('#scroll_sidebar').length) $('#scroll_sidebar').scrollSidebar();

		$(window).load(function(){
			if($('.flexslider').length){
			$(window).trigger('resize');
			}

		});

		// Sticky and Go-top

		(function ($, window) {

			function Temp(el, options) {
				this.el = $(el);
				this.init(options);
			}

			Temp.DEFAULTS = {
				sticky: true
			}

			Temp.prototype = {
				init: function (options) {
					var base = this;
						base.window = $(window);
						base.options = $.extend({}, Temp.DEFAULTS, options);
						base.menuWrap = $('.menu_wrap');
						base.goTop = $('<button class="go-to-top" id="go-to-top"></button>').appendTo(base.el);

					// Sticky
					if (base.options.sticky) {
						base.sticky.stickySet.call(base, base.window);
					}

					// Scroll Event
					base.window.on('scroll', function (e) {
						if (base.options.sticky) {
							base.sticky.stickyInit.call(base, e.currentTarget);
						}
						base.gotoTop.scrollHandler.call(base, e.currentTarget);
					});

					// Click Handler Button GotoTop
					base.gotoTop.clickHandler(base);
				},
				sticky: {
					stickySet: function () {
						var menuWrap = this.menuWrap, offset;
						if (menuWrap.length) {
							offset = menuWrap.offset().top;
							$.data(menuWrap, 'data', {
								offset: offset,
								height: menuWrap.outerHeight(true)
							});
							this.spacer = $('<div/>', { 'class': 'spacer' }).insertBefore(menuWrap);
						}
					},
					stickyInit: function (win) {
						var base = this, data;
						if (base.menuWrap.length) {
							data = $.data(base.menuWrap, 'data');
							base.sticky.stickyAction(data, win, base);
						}
					},
					stickyAction: function (data, win, base) {
						var scrollTop = $(win).scrollTop();
						if (scrollTop > data.offset) {
							base.spacer.css({ height: data.height });
							if (!base.menuWrap.hasClass('sticky')) {
								base.menuWrap.addClass('sticky');
							}
						} else {
							base.spacer.css({ height: 'auto' });
							if (base.menuWrap.hasClass('sticky')) {
								base.menuWrap.removeClass('sticky');
							}
						}
					}
				},
				gotoTop: {
					scrollHandler: function (win) {
						$(win).scrollTop() > 200 ?
							this.goTop.addClass('go-top-visible'):
							this.goTop.removeClass('go-top-visible');
					},
					clickHandler: function (self) {
						self.goTop.on('click', function (e) {
							e.preventDefault();
							$('html, body').animate({ scrollTop: 0 }, 800);
						});
					}
				}
			}

			/* Temp Plugin
			 * ================================== */

			$.fn.Temp = function (option) {
				return this.each(function () {
					var $this = $(this), data = $this.data('Temp'),
						options = typeof option == 'object' && option;
					if (!data) {
						$this.data('Temp', new Temp(this, options));
					}
				});
			}

			$('body').Temp({
				sticky: true
			});

		})(jQuery, window);

		/**********************************************************************************/

		/*
		Plugin Name: 	BrowserSelector
		Written by: 	Crivos - (http://www.crivos.com)
		Version: 		0.1
		*/

		(function($, navigator) {
			$.extend({

				browserSelector: function() {

					var u = navigator.userAgent,
						ua = u.toLowerCase(),
						is = function (t) {
							return ua.indexOf(t) > -1;
						},
						g = 'gecko',
						w = 'webkit',
						s = 'safari',
						o = 'opera',
						h = document.documentElement,
						b = [(!(/opera|webtv/i.test(ua)) && /msie\s(\d)/.test(ua)) ? ('ie ie' + parseFloat(navigator.appVersion.split("MSIE")[1])) : is('firefox/2') ? g + ' ff2' : is('firefox/3.5') ? g + ' ff3 ff3_5' : is('firefox/3') ? g + ' ff3' : is('gecko/') ? g : is('opera') ? o + (/version\/(\d+)/.test(ua) ? ' ' + o + RegExp.jQuery1 : (/opera(\s|\/)(\d+)/.test(ua) ? ' ' + o + RegExp.jQuery2 : '')) : is('konqueror') ? 'konqueror' : is('chrome') ? w + ' chrome' : is('iron') ? w + ' iron' : is('applewebkit/') ? w + ' ' + s + (/version\/(\d+)/.test(ua) ? ' ' + s + RegExp.jQuery1 : '') : is('mozilla/') ? g : '', is('j2me') ? 'mobile' : is('iphone') ? 'iphone' : is('ipod') ? 'ipod' : is('mac') ? 'mac' : is('darwin') ? 'mac' : is('webtv') ? 'webtv' : is('win') ? 'win' : is('freebsd') ? 'freebsd' : (is('x11') || is('linux')) ? 'linux' : '', 'js'];

					c = b.join(' ');
					h.className += ' ' + c;

				}

			});
		})(jQuery, navigator);

		/**********************************************************************************/

		/**********************************************************************************/

		/*
		Plugin Name: 	smoothScroll for jQuery.
		Written by: 	Crivos - (http://www.crivos.com)
		Version: 		0.1

		Based on:

			SmoothScroll v1.2.1
			Licensed under the terms of the MIT license.

			People involved
			 - Balazs Galambosi (maintainer)
			 - Patrick Brunner  (original idea)
			 - Michael Herf     (Pulse Algorithm)

		*/
		(function($) {
			$.extend({

				smoothScroll: function() {

					// Scroll Variables (tweakable)
					var defaultOptions = {

						// Scrolling Core
						frameRate        : 150, // [Hz]
						animationTime    : 700, // [px]
						stepSize         : 80, // [px]

						// Pulse (less tweakable)
						// ratio of "tail" to "acceleration"
						pulseAlgorithm   : true,
						pulseScale       : 8,
						pulseNormalize   : 1,

						// Acceleration
						accelerationDelta : 20,  // 20
						accelerationMax   : 1,   // 1

						// Keyboard Settings
						keyboardSupport   : true,  // option
						arrowScroll       : 50,     // [px]

						// Other
						touchpadSupport   : true,
						fixedBackground   : true,
						excluded          : ""
					};

					var options = defaultOptions;

					// Other Variables
					var isExcluded = false;
					var isFrame = false;
					var direction = { x: 0, y: 0 };
					var initDone  = false;
					var root = document.documentElement;
					var activeElement;
					var observer;
					var deltaBuffer = [ 120, 120, 120 ];

					var key = { left: 37, up: 38, right: 39, down: 40, spacebar: 32,
								pageup: 33, pagedown: 34, end: 35, home: 36 };


					/***********************************************
					 * INITIALIZE
					 ***********************************************/

					/**
					 * Tests if smooth scrolling is allowed. Shuts down everything if not.
					 */
					function initTest() {

						var disableKeyboard = false;

						// disable keys for google reader (spacebar conflict)
						if (document.URL.indexOf("google.com/reader/view") > -1) {
							disableKeyboard = true;
						}

						// disable everything if the page is blacklisted
						if (options.excluded) {
							var domains = options.excluded.split(/[,\n] ?/);
							domains.push("mail.google.com"); // exclude Gmail for now
							for (var i = domains.length; i--;) {
								if (document.URL.indexOf(domains[i]) > -1) {
									observer && observer.disconnect();
									removeEvent("mousewheel", wheel);
									disableKeyboard = true;
									isExcluded = true;
									break;
								}
							}
						}

						// disable keyboard support if anything above requested it
						if (disableKeyboard) {
							removeEvent("keydown", keydown);
						}

						if (options.keyboardSupport && !disableKeyboard) {
							addEvent("keydown", keydown);
						}
					}

					/**
					 * Sets up scrolls array, determines if frames are involved.
					 */
					function init() {

						if (!document.body) return;

						var body = document.body;
						var html = document.documentElement;
						var windowHeight = window.innerHeight;
						var scrollHeight = body.scrollHeight;

						// check compat mode for root element
						root = (document.compatMode.indexOf('CSS') >= 0) ? html : body;
						activeElement = body;

						initTest();
						initDone = true;

						// Checks if this script is running in a frame
						if (top != self) {
							isFrame = true;
						}

						/**
						 * This fixes a bug where the areas left and right to
						 * the content does not trigger the onmousewheel event
						 * on some pages. e.g.: html, body { height: 100% }
						 */
						else if (scrollHeight > windowHeight &&
								(body.offsetHeight <= windowHeight ||
								 html.offsetHeight <= windowHeight)) {

							// DOMChange (throttle): fix height
							var pending = false;
							var refresh = function () {
								if (!pending && html.scrollHeight != document.height) {
									pending = true; // add a new pending action
									setTimeout(function () {
										html.style.height = document.height + 'px';
										pending = false;
									}, 500); // act rarely to stay fast
								}
							};
							html.style.height = 'auto';
							setTimeout(refresh, 10);

							var config = {
								attributes: true,
								childList: true,
								characterData: false
							};

							observer = new MutationObserver(refresh);
							observer.observe(body, config);

							// clearfix
							if (root.offsetHeight <= windowHeight) {
								var underlay = document.createElement("div");
								underlay.style.clear = "both";
								body.appendChild(underlay);
							}
						}

						// gmail performance fix
						if (document.URL.indexOf("mail.google.com") > -1) {
							var s = document.createElement("style");
							s.innerHTML = ".iu { visibility: hidden }";
							(document.getElementsByTagName("head")[0] || html).appendChild(s);
						}
						// facebook better home timeline performance
						// all the HTML resized images make rendering CPU intensive
						else if (document.URL.indexOf("www.facebook.com") > -1) {
							var home_stream = document.getElementById("home_stream");
							home_stream && (home_stream.style.webkitTransform = "translateZ(0)");
						}
						// disable fixed background
						if (!options.fixedBackground && !isExcluded) {
							body.style.backgroundAttachment = "scroll";
							html.style.backgroundAttachment = "scroll";
						}
					}


					/************************************************
					 * SCROLLING
					 ************************************************/

					var que = [];
					var pending = false;
					var lastScroll = +new Date;

					/**
					 * Pushes scroll actions to the scrolling queue.
					 */
					function scrollArray(elem, left, top, delay) {

						delay || (delay = 1000);
						directionCheck(left, top);

						if (options.accelerationMax != 1) {
							var now = +new Date;
							var elapsed = now - lastScroll;
							if (elapsed < options.accelerationDelta) {
								var factor = (1 + (30 / elapsed)) / 2;
								if (factor > 1) {
									factor = Math.min(factor, options.accelerationMax);
									left *= factor;
									top  *= factor;
								}
							}
							lastScroll = +new Date;
						}

						// push a scroll command
						que.push({
							x: left,
							y: top,
							lastX: (left < 0) ? 0.99 : -0.99,
							lastY: (top  < 0) ? 0.99 : -0.99,
							start: +new Date
						});

						// don't act if there's a pending queue
						if (pending) {
							return;
						}

						var scrollWindow = (elem === document.body);

						var step = function (time) {

							var now = +new Date;
							var scrollX = 0;
							var scrollY = 0;

							for (var i = 0; i < que.length; i++) {

								var item = que[i];
								var elapsed  = now - item.start;
								var finished = (elapsed >= options.animationTime);

								// scroll position: [0, 1]
								var position = (finished) ? 1 : elapsed / options.animationTime;

								// easing [optional]
								if (options.pulseAlgorithm) {
									position = pulse(position);
								}

								// only need the difference
								var x = (item.x * position - item.lastX) >> 0;
								var y = (item.y * position - item.lastY) >> 0;

								// add this to the total scrolling
								scrollX += x;
								scrollY += y;

								// update last values
								item.lastX += x;
								item.lastY += y;

								// delete and step back if it's over
								if (finished) {
									que.splice(i, 1); i--;
								}
							}

							// scroll left and top
							if (scrollWindow) {
								window.scrollBy(scrollX, scrollY);
							}
							else {
								if (scrollX) elem.scrollLeft += scrollX;
								if (scrollY) elem.scrollTop  += scrollY;
							}

							// clean up if there's nothing left to do
							if (!left && !top) {
								que = [];
							}

							if (que.length) {
								requestFrame(step, elem, (delay / options.frameRate + 1));
							} else {
								pending = false;
							}
						};

						// start a new queue of actions
						requestFrame(step, elem, 0);
						pending = true;
					}

					/***********************************************
					 * EVENTS
					 ***********************************************/

					/**
					 * Mouse wheel handler.
					 * @param {Object} event
					 */
					function wheel(event) {

						if (!initDone) {
							init();
						}

						var target = event.target;
						var overflowing = overflowingAncestor(target);

						// use default if there's no overflowing
						// element or default action is prevented
						if (!overflowing || event.defaultPrevented ||
							isNodeName(activeElement, "embed") ||
						   (isNodeName(target, "embed") && /\.pdf/i.test(target.src))) {
							return true;
						}

						var deltaX = event.wheelDeltaX || 0;
						var deltaY = event.wheelDeltaY || 0;

						// use wheelDelta if deltaX/Y is not available
						if (!deltaX && !deltaY) {
							deltaY = event.wheelDelta || 0;
						}

						// check if it's a touchpad scroll that should be ignored
						if (!options.touchpadSupport && isTouchpad(deltaY)) {
							return true;
						}

						// scale by step size
						// delta is 120 most of the time
						// synaptics seems to send 1 sometimes
						if (Math.abs(deltaX) > 1.2) {
							deltaX *= options.stepSize / 120;
						}
						if (Math.abs(deltaY) > 1.2) {
							deltaY *= options.stepSize / 120;
						}

						scrollArray(overflowing, -deltaX, -deltaY);
						event.preventDefault();
					}

					/**
					 * Keydown event handler.
					 * @param {Object} event
					 */
					function keydown(event) {

						var target   = event.target;
						var modifier = event.ctrlKey || event.altKey || event.metaKey ||
									  (event.shiftKey && event.keyCode !== key.spacebar);

						// do nothing if user is editing text
						// or using a modifier key (except shift)
						// or in a dropdown
						if ( /input|textarea|select|embed/i.test(target.nodeName) ||
							 target.isContentEditable ||
							 event.defaultPrevented   ||
							 modifier ) {
						  return true;
						}
						// spacebar should trigger button press
						if (isNodeName(target, "button") &&
							event.keyCode === key.spacebar) {
						  return true;
						}

						var shift, x = 0, y = 0;
						var elem = overflowingAncestor(activeElement);
						var clientHeight = elem.clientHeight;

						if (elem == document.body) {
							clientHeight = window.innerHeight;
						}

						switch (event.keyCode) {
							case key.up:
								y = -options.arrowScroll;
								break;
							case key.down:
								y = options.arrowScroll;
								break;
							case key.spacebar: // (+ shift)
								shift = event.shiftKey ? 1 : -1;
								y = -shift * clientHeight * 0.9;
								break;
							case key.pageup:
								y = -clientHeight * 0.9;
								break;
							case key.pagedown:
								y = clientHeight * 0.9;
								break;
							case key.home:
								y = -elem.scrollTop;
								break;
							case key.end:
								var damt = elem.scrollHeight - elem.scrollTop - clientHeight;
								y = (damt > 0) ? damt+10 : 0;
								break;
							case key.left:
								x = -options.arrowScroll;
								break;
							case key.right:
								x = options.arrowScroll;
								break;
							default:
								return true; // a key we don't care about
						}

						scrollArray(elem, x, y);
						event.preventDefault();
					}

					/**
					 * Mousedown event only for updating activeElement
					 */
					function mousedown(event) {
						activeElement = event.target;
					}


					/***********************************************
					 * OVERFLOW
					 ***********************************************/

					var cache = {}; // cleared out every once in while
					setInterval(function () { cache = {}; }, 10 * 1000);

					var uniqueID = (function () {
						var i = 0;
						return function (el) {
							return el.uniqueID || (el.uniqueID = i++);
						};
					})();

					function setCache(elems, overflowing) {
						for (var i = elems.length; i--;)
							cache[uniqueID(elems[i])] = overflowing;
						return overflowing;
					}

					function overflowingAncestor(el) {
						var elems = [];
						var rootScrollHeight = root.scrollHeight;
						do {
							var cached = cache[uniqueID(el)];
							if (cached) {
								return setCache(elems, cached);
							}
							elems.push(el);
							if (rootScrollHeight === el.scrollHeight) {
								if (!isFrame || root.clientHeight + 10 < rootScrollHeight) {
									return setCache(elems, document.body); // scrolling root in WebKit
								}
							} else if (el.clientHeight + 10 < el.scrollHeight) {
								overflow = getComputedStyle(el, "").getPropertyValue("overflow-y");
								if (overflow === "scroll" || overflow === "auto") {
									return setCache(elems, el);
								}
							}
						} while (el = el.parentNode);
					}


					/***********************************************
					 * HELPERS
					 ***********************************************/

					function addEvent(type, fn, bubble) {
						window.addEventListener(type, fn, (bubble||false));
					}

					function removeEvent(type, fn, bubble) {
						window.removeEventListener(type, fn, (bubble||false));
					}

					function isNodeName(el, tag) {
						return (el.nodeName||"").toLowerCase() === tag.toLowerCase();
					}

					function directionCheck(x, y) {
						x = (x > 0) ? 1 : -1;
						y = (y > 0) ? 1 : -1;
						if (direction.x !== x || direction.y !== y) {
							direction.x = x;
							direction.y = y;
							que = [];
							lastScroll = 0;
						}
					}

					var deltaBufferTimer;

					function isTouchpad(deltaY) {
						if (!deltaY) return;
						deltaY = Math.abs(deltaY)
						deltaBuffer.push(deltaY);
						deltaBuffer.shift();
						clearTimeout(deltaBufferTimer);
						var allEquals    = (deltaBuffer[0] == deltaBuffer[1] &&
											deltaBuffer[1] == deltaBuffer[2]);
						var allDivisable = (isDivisible(deltaBuffer[0], 120) &&
											isDivisible(deltaBuffer[1], 120) &&
											isDivisible(deltaBuffer[2], 120));
						return !(allEquals || allDivisable);
					}

					function isDivisible(n, divisor) {
						return (Math.floor(n / divisor) == n / divisor);
					}

					var requestFrame = (function () {
						  return  window.requestAnimationFrame       ||
								  window.webkitRequestAnimationFrame ||
								  function (callback, element, delay) {
									  window.setTimeout(callback, delay || (1000/60));
								  };
					})();

					var MutationObserver = window.MutationObserver || window.WebKitMutationObserver;


					/***********************************************
					 * PULSE
					 ***********************************************/

					/**
					 * Viscous fluid with a pulse for part and decay for the rest.
					 * - Applies a fixed force over an interval (a damped acceleration), and
					 * - Lets the exponential bleed away the velocity over a longer interval
					 * - Michael Herf, http://stereopsis.com/stopping/
					 */
					function pulse_(x) {
						var val, start, expx;
						// test
						x = x * options.pulseScale;
						if (x < 1) { // acceleartion
							val = x - (1 - Math.exp(-x));
						} else {     // tail
							// the previous animation ended here:
							start = Math.exp(-1);
							// simple viscous drag
							x -= 1;
							expx = 1 - Math.exp(-x);
							val = start + (expx * (1 - start));
						}
						return val * options.pulseNormalize;
					}

					function pulse(x) {
						if (x >= 1) return 1;
						if (x <= 0) return 0;

						if (options.pulseNormalize == 1) {
							options.pulseNormalize /= pulse_(1);
						}
						return pulse_(x);
					}

					addEvent("mousedown", mousedown);
					addEvent("mousewheel", wheel);
					addEvent("load", init);

				}

			});
		})(jQuery);

		/* ---------------------------------------------------- */
        /*	SmoothScroll										*/
        /* ---------------------------------------------------- */

		try {
			$.browserSelector();
			var $html = $('html');
			if ( $html.hasClass('chrome') || $html.hasClass('ie11') || $html.hasClass('ie10') ) {
				$.smoothScroll();
			}
		} catch(err) {}
		
		// custom select

		(function(){

			$('.custom_select').each(function(){
				var list = $(this).children('ul'),
					select = $(this).find('select'),
					title = $(this).find('.select_title');
			 

				// select items to list items

				if($(this).find('[data-filter]').length){
					for(var i = 0,len = select.children('option').length;i < len;i++){
						list.append('<li data-filter="'+select.children('option').eq(i).data('filter')+'">'+select.children('option').eq(i).text()+'</li>')
					}
				}
				else{
					for(var i = 0,len = select.children('option').length;i < len;i++){
						list.append('<li>'+select.children('option').eq(i).text()+'</li>')
					}
				}
				select.hide();

				// open list
				
				title.on('click',function(){
					list.slideToggle(400);
					$(this).toggleClass('active');
				});

				// selected option

				list.on('click','li',function(){
					var val = $(this).text();
					title.text(val);
					list.slideUp(400);
					select.val(val);
					title.toggleClass('active');
				});

			});

		})();

		// accordion & toggle

		(function(){

			var aItem = $('.accordion:not(.toggle) .accordion_item'),
				link = aItem.find('.a_title'),
				aToggleItem = $('.accordion.toggle .accordion_item'),
				tLink = aToggleItem.find('.a_title');

			aItem.add(aToggleItem).children('.a_title').not('.active').next().hide();


			link.on('click',function(){

				$(this).addClass('active')
					.next().stop().slideDown()
					.parent().siblings()
					.children('.a_title')
					.removeClass('active')
					.next().stop().slideUp();

			});

			tLink.on('click',function(){
				$(this).toggleClass('active')
						.next().stop().slideToggle();

			})

		})();

		// contact form

		(function(){

			var cf = $('#contactform');
			cf.append('<div class="message_container"></div>');

			cf.on("submit",function(event){

				var self = $(this),text;

				var request = $.ajax({
					url:"bat/mail.php",
					type : "post",
					data : self.serialize()
				});

				request.then(function(data){
					if(data == "1"){

						text = "Your message has been sent successfully!";

						cf.find('input:not([type="submit"]),textarea').val('');

						$('.message_container').html('<div class="alert_box success"><i class="fa fa-smile-o"></i><p>'+text+'</p></div>')
							.delay(150)
							.slideDown(300)
							.delay(4000)
							.slideUp(300,function(){
								$(this).html("");
							});

					}
					else{
						if(cf.find('textarea').val().length < 20){
							text = "Message must contain at least 20 characters!"
						}
						if(cf.find('input').val() == ""){
							text = "All required fields must be filled!";
						}
						$('.message_container').html('<div class="alert_box error"><i class="fa fa-exclamation-triangle"></i><p>'+text+'</p></div>')
							.delay(150)
							.slideDown(300)
							.delay(4000)
							.slideUp(300,function(){
								$(this).html("");
							});
					}
				},function(){
					$('.message_container').html('<div class="alert_box error"><i class="fa fa-exclamation-triangle"></i><p>Connection to server failed!</p></div>')
							.delay(150)
							.slideDown(300)
							.delay(4000)
							.slideUp(300,function(){
								$(this).html("");
							});
				});


				event.preventDefault();
			});

		})();

		// jackbox

		(function(){

			if($(".jackbox[data-group]").length){
				jQuery(".jackbox[data-group]").jackBox("init",{
				    showInfoByDefault: false,
				    preloadGraphics: false, 
				    fullscreenScalesContent: true,
				    autoPlayVideo: false,
				    flashVideoFirst: false,
				    defaultVideoWidth: 960,
				    defaultVideoHeight: 540,
				    baseName: ".jackbox",
				    className: ".jackbox",
				    useThumbs: true,
				    thumbsStartHidden: false,
				    thumbnailWidth: 75,
				    thumbnailHeight: 50,
				    useThumbTooltips: false,
				    showPageScrollbar: false,
				    useKeyboardControls: true 
				});
			}

		})();

	});

})(jQuery);