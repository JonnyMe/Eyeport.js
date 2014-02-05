$.fn.eyeport = function() {
				
	//DECLARING OPTION FUNCTIONS
	var options = $.extend({
		
		//CALLED WHEN TARGET ENTERS THE VISIBLE AREA
		eyeportIn: 		function() {},
		//CALLED WHEN TARGET QUITS THE VISIBLE AREA
		eyeportOut: 	function() {}
	
	}, arguments[0] || {});
	
	var d_target 		= this;
	var visible 		= false;

	var windowHeight, windowScrollTop, scrolledView, divOffset, targetHeight;

	$(window).scroll(function(){
		
		//WINDOW RELATED VARIABLES
		windowHeight 		= $(window).height();
		windowScrollTop 	= $(window).scrollTop();
		scrolledView 		= windowScrollTop + windowHeight;
		
		//DIV REALTED VARIABLES
		divOffset 			= d_target.offset().top;
		targetHeight 		= d_target.height();

		//CHECK IF DIV IS INSIDE THE VISIBLE AREA
		if(!visible && scrolledView > divOffset && scrolledView < (divOffset + targetHeight + windowHeight)){
			visible = true;
			options.eyeportIn.call(d_target);
		}
		
		//CHECK IF DIV WENT OUT OF VISIBLE AREA
		if(visible && scrolledView > (divOffset + targetHeight + windowHeight)){
			visible = false;
			options.eyeportOut.call(d_target);
		}
		
		//CHECK IF DIV WENT INSIDE OF VISIBLE AREA
		if(visible && scrolledView < divOffset){
			visible = false;
			options.eyeportOut.call(d_target);
		}
	});
};
