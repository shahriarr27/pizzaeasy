(function() {
  
  var Menu = (function() {
    var burger = document.querySelector('.burger');
    var menu = document.querySelector('.menu');
    var menuList = document.querySelector('.menu__list');

    var menuItems = document.querySelectorAll('.menu__item');
    
    var active = false;
    
    var toggleMenu = function() {
      if (!active) {
        menu.classList.add('menu--active');
        menuList.classList.add('menu__list--active');

        burger.classList.add('burger--close');
        for (var i = 0, ii = menuItems.length; i < ii; i++) {
          menuItems[i].classList.add('menu__item--active');
        }
        
        active = true;
      } else {
        menu.classList.remove('menu--active');
        menuList.classList.remove('menu__list--active');

        burger.classList.remove('burger--close');
        for (var i = 0, ii = menuItems.length; i < ii; i++) {
          menuItems[i].classList.remove('menu__item--active');
        }
        
        active = false;
      }
    };
    
    var bindActions = function() {
      burger.addEventListener('click', toggleMenu, false);
    };
    
    var init = function() {
      bindActions();
    };
    
    return {
      init: init
    };
    
  }());
  
  Menu.init();
  
}());



jQuery(document).ready(function() {
  var sync1 = jQuery("#sync1");
  var sync2 = jQuery("#sync2");
  var syncedSecondary = true;

  sync1
    .owlCarousel({
    items: 1,
    slideSpeed: 3000,
    nav: true,
    animateOut: 'fadeOut',
    animatein: 'fadeIn',
    autoplayHoverPause: true,
    autoplaySpeed: 2400,
    margin: 10,
    mouseDrag: false,
    dots: false,
    loop: true,
    responsiveClass: true,
    responsive: {
      0: {
        item: 1,
        autoplay: false
      },
      600: {
        items: 1,
        autoplay: true
      }
    },
    responsiveRefreshRate: 200,
    navText: [
      '<i class="icon icon-angle-left"></i>', '<i class="icon icon-angle-right"></i>' 
    ]
  })
    .on("changed.owl.carousel", syncPosition);

  sync2
    .on("initialized.owl.carousel", function() {
    sync2
      .find(".owl-item")
      .eq(0)
      .addClass("current");
  })
    .owlCarousel({
    items: 1,
    dots: false,
    //   nav: true,
    animateOut: 'fadeOut',
    animatein: 'fadeIn',
    mouseDrag: false,
    center: false,
    margin: 5,
    responsive: {
      300: {
        items: 1,
        autoplay: false
      },
      420: {
        items: 1,
        autoplay: false
      },
      600: {
        items: 1,
        autoplay: false
      },
    }, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
    responsiveRefreshRate: 100
  })
    .on("changed.owl.carousel", syncPosition2);

  function syncPosition(el) {
    //if you set loop to false, you have to restore this next line
    //var current = el.item.index;

    //if you disable loop you have to comment this block
    var count = el.item.count - 1;
    var current = Math.round(el.item.index - el.item.count / 2 - 0.5);

    if (current < 0) {
      current = count;
    }
    if (current > count) {
      current = 0;
    }

    //end block

    sync2
      .find(".owl-item")
      .removeClass("current")
      .eq(current)
      .addClass("current");
    var onscreen = sync2.find(".owl-item.active").length - 1;
    var start = sync2
    .find(".owl-item.active")
    .first()
    .index();
    var end = sync2
    .find(".owl-item.active")
    .last()
    .index();

    if (current > end) {
      sync2.data("owl.carousel").to(current, 100, true);
    }
    if (current < start) {
      sync2.data("owl.carousel").to(current - onscreen, 100, true);
    }
  }

  function syncPosition2(el) {
    if (syncedSecondary) {
      var number = el.item.index;
      sync1.data("owl.carousel").to(number, 100, true);
    }
  }

  sync2.on("click", ".owl-item", function(e) {
    e.preventDefault();
    var number = jQuery(this).index();
    sync1.data("owl.carousel").to(number, 300, true);
  });
});



  

  (function ($) {
    var $main_window = $(window);
  $main_window.on("scroll", function () {
    if ($(this).scrollTop() > 250) {
      $(".back-to-top").fadeIn(200);
    } else {
      $(".back-to-top").fadeOut(200);
    }
  });
  $(".back-to-top").on("click", function () {
    $("html, body").animate({
      scrollTop: 0
    }, "slow");
    return false;
  });
})(jQuery);



let $btns = $('.p-buttons a');
$btns.click(function(e){
   $('.p-buttons a').removeClass('active');
   e.target.classList.add('active');

   let selector = $(e.target).attr('data-filter');
   $('.restourant-list .grid').isotope({
      filter: selector
   });
   return false;
});

$('.p-buttons #btn1').trigger('click');



$(document).ready(function() {
  $('#list').click(function(event){
    event.preventDefault();
    $('#restourant-grid .item').addClass('col-lg-12 col-md-12 list-style');
    $('#restourant-grid .item').removeClass('col-lg-6 col-md-6 grid-style');
    $('#grid').removeClass('active');
    $('#list').addClass('active');
  });

  $('#grid').click(function(event){
    event.preventDefault();
    $('#restourant-grid .item').removeClass('col-lg-12 col-md-12 list-style');
    $('#restourant-grid .item').addClass('col-lg-6 col-md-6 grid-style');
    $('#list').removeClass('active');
    $('#grid').addClass('active');
  });

  $('#map').click(function(event){
    event.preventDefault();
    $('#restourant-grid .map-wrapper').fadeToggle("slow");
  });
});



if ($('#clients').length) {
  $('#clients .owl-carousel').owlCarousel({
    loop:true,
    margin:30,
    nav:false,
    autoplayHoverPause: true,
    smartSpeed: 550,
    autoplay: 6000,
    dots: false,
    navText: [ '<i class="icon icon-angle-left"></i>', '<i class="icon icon-angle-right"></i>' ],
    responsive:{
      0:{
        items:1
      },
      600:{
        items:1
      },
      800:{
        items:2
      },
      1024:{
        items:2
      },
      1200:{
        items:3
      },
      1500:{
        items:3
      }
    }
  });    		
}

$(document).ready(function() {
  $('.select2').select2();
});



	
	//-------------------------------
	// Bootstrap DateTimePicker
	//-------------------------------
	if($(".form_datetime").length) {
		$(".form_datetime").datetimepicker({format: 'dd-mm-yyyy hh:ii'});
	}


  
	//-------------------------------
	// Lightbox
	//-------------------------------
	if($(".fancybox").length) {
		$(".fancybox").fancybox();
	}



  
	//-------------------------------
	// Star Rating
	//-------------------------------

	if($('.stars').length){

		/* 1. Visualizing things on Hover - See next part for action on click */
		$('.stars li').on('mouseover', function(){
			var onStar = parseInt($(this).data('value'), 10); // The star currently mouse on

			// Now highlight all the stars that's not after the current hovered star
			$(this).parent().children('li.star').each(function(e){
				if (e < onStar) {
					$(this).addClass('hover');
				}
				else {
					$(this).removeClass('hover');
				}
			});

		}).on('mouseout', function(){
			$(this).parent().children('li.star').each(function(e){
				$(this).removeClass('hover');
			});
		});

		/* 2. Action to perform on click */
		$('.stars li').on('click', function(){
			var onStar = parseInt($(this).data('value'), 10); // The star currently selected
			var stars = $(this).parent().children('li.star');

			for (i = 0; i < stars.length; i++) {
				$(stars[i]).removeClass('selected');
			}

			for (i = 0; i < onStar; i++) {
				$(stars[i]).addClass('selected');
			}

		});
		function responseMessage(msg) {
			$('.rate-result').fadeIn(200);
			$('.rate-result').text(msg);
		}
	}

