

jQuery(document).ready(function($){ 
	console.log("loaded");


	function toggleNav() {
		console.log("called toggleNav()");
	    if ($('#site-wrapper').hasClass('show-nav')) {
	        console.log("Do things on Nav Close");
	        $('#site-wrapper').removeClass('show-nav');
	    } else {
	        // Do things on Nav Open
	        $('#site-wrapper').addClass('show-nav');
	    }

	    //$('#site-wrapper').toggleClass('show-nav');
	}


	$("#applicant").on('change', function () {
		if( ( this ).checked ){
			console.log("Checked: " + ( this ).checked );
			// $('.singer_profile_overview').removeClass('visible');
       		// $('#' + $(this).attr("id") + "_block").css("display", "flex"); 
       		$("#applicant_block").css("display", "flex"); 
		}	
    	 
    });	
    $("#creditcard").on('change', function () {
		if( ( this ).checked ){
			console.log("Checked: " + ( this ).checked );
			// $('.singer_profile_overview').removeClass('visible');
       		// $('#' + $(this).attr("id") + "_block").css("display", "flex"); 
       		$("#applicant_block").css("display", "none"); 
		}	
    	 
    });		


     // Toggle Nav on Click
    $('.toggle-nav').on("click", function() {
        // Calling a function in case you want to expand upon this.
        console.log("click on toggle-nav");
        toggleNav();
    });

    //-------------------------------------------------
        // TOOL TIPS
        var targets = $( '[rel~=tooltip]' );
        var target  = false;
        var tooltip = false;
        var title   = false;


        targets.on( 'mouseenter', function()  {
            target  = $( this );
            tip     = target.attr( 'title' );
            tooltip = $( '<div id="tooltip"></div>' );
     
            if( !tip || tip == '' ) {
                return false;
            }
     
            target.removeAttr( 'title' );
            tooltip.css( 'opacity', 0 ).html( tip ).appendTo( 'body' );
     
            var init_tooltip = function()   {
                if( $( window ).width() < tooltip.outerWidth() * 1.5 ){
                    tooltip.css( 'max-width', $( window ).width() / 2 );
                }
                else{
                    tooltip.css( 'max-width', 340 );
                }
     
                var pos_left = target.offset().left + ( target.outerWidth() / 2 ) - ( tooltip.outerWidth() / 2 ),
                    pos_top  = target.offset().top - tooltip.outerHeight() - 20;
     
                if( pos_left < 0 )
                {
                    pos_left = target.offset().left + target.outerWidth() / 2 - 20;
                    tooltip.addClass( 'left' );
                }
                else
                    tooltip.removeClass( 'left' );
     
                if( pos_left + tooltip.outerWidth() > $( window ).width() )
                {
                    pos_left = target.offset().left - tooltip.outerWidth() + target.outerWidth() / 2 + 20;
                    tooltip.addClass( 'right' );
                }
                else
                    tooltip.removeClass( 'right' );
     
                if( pos_top < 0 )
                {
                    var pos_top  = target.offset().top + target.outerHeight();
                    tooltip.addClass( 'top' );
                }
                else
                    tooltip.removeClass( 'top' );
     
                tooltip.css( { left: pos_left, top: pos_top } )
                       .animate( { top: '+=10', opacity: 1 }, 50 );
            };
     
            init_tooltip();
            $( window ).resize( init_tooltip );
     
            var remove_tooltip = function() {
                tooltip.animate( { top: '-=10', opacity: 0 }, 50, function() {
                    $( this ).remove();
                });
     
                target.attr( 'title', tip );
            };
     
            target.bind( 'mouseleave', remove_tooltip );
            tooltip.bind( 'click', remove_tooltip );
        });






        // tooltips
        //---------------------------------------




});