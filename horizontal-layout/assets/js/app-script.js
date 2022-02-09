
$(function() {
    "use strict";
	
	
  $(document).ready(function () {
		 $("#respMenu").horizontalMenu({
			 resizeWidth: '1024', // Set the same in Media query
			 animationSpeed: 'fast', //slow, medium, fast
			 accoridonExpAll: false //Expands all the accordion menu on click
		 });
	 });

	   
// === sidebar menu activation js

 $(function() {
        for (var i = window.location, o = $(".horizontal-menu a").filter(function() {
            return this.href == i;
        }).addClass("menu-active").parent().addClass("menu-active"); ;) {
            if (!o.is("li")) break;
            o = o.parent().addClass("in").parent().addClass("menu-active");
        }
    }),   
	   
/* sticky menu */

$(document).ready(function(){ 
    $(window).on("scroll", function(){ 
        if ($(this).scrollTop() > 60) { 
            $('.horizontal-menu').addClass('sticky-menu'); 
        } else { 
            $('.horizontal-menu').removeClass('sticky-menu'); 
        } 
    });

 });


/* Back To Top */

$(document).ready(function(){ 
    $(window).on("scroll", function(){ 
        if ($(this).scrollTop() > 300) { 
            $('.back-to-top').fadeIn(); 
        } else { 
            $('.back-to-top').fadeOut(); 
        } 
    }); 

    $('.back-to-top').on("click", function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    }); 
});	   
	   

   
	$(function () {
	  $('[data-toggle="popover"]').popover()
	})


	$(function () {
	  $('[data-toggle="tooltip"]').tooltip()
	})
	
	
	
	// mobile menu
	
	 $("#mobile-btn").on("click", function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("sidenav");
    });
	
	 
	$(".close-btn").on("click", function(e) {
        e.preventDefault();
        $("#wrapper").removeClass("sidenav");
    }); 
	
	$(".overlay").on("click", function(e) {
        e.preventDefault();
        $("#wrapper").removeClass("sidenav");
    }); 
	
	
	// theme setting
	 $(".switcher-icon").on("click", function(e) {
        e.preventDefault();
        $(".right-sidebar").toggleClass("right-toggled");
    });
	
    // header setting 
	
	$('#header1').click(header1);
    $('#header2').click(header2);
	$('#header3').click(header3);
	$('#header4').click(header4);
	$('#header5').click(header5);
	$('#header6').click(header6);
	
	function header1() {
      $('#header-setting').attr('class', 'color-header navbar navbar-expand bg-theme1');
    }
	
	function header2() {
      $('#header-setting').attr('class', 'color-header navbar navbar-expand bg-theme2');
    }
	
	function header3() {
      $('#header-setting').attr('class', 'color-header navbar navbar-expand bg-theme3');
    }
	
	function header4() {
      $('#header-setting').attr('class', 'color-header navbar navbar-expand bg-theme4');
    }
	
	function header5() {
      $('#header-setting').attr('class', 'color-header navbar navbar-expand bg-theme5');
    }
	
	function header6() {
      $('#header-setting').attr('class', 'color-header navbar navbar-expand bg-theme6');
    }
	
	
	// default header & horizontal menu
	
	$(document).ready(function(){
		
	   $("#default-header").click(function(){
		  
		 $("#header-setting").removeClass("color-header bg-theme1 bg-theme2 bg-theme3 bg-theme4 bg-theme5 bg-theme6");
		
	  });
	  
	  
	  
	});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

});