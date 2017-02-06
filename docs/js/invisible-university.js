
$( () => {

	////////////////////////////////////////////////////////7
	// Lift topic menu up
	var topicAnimating = null;
	$( ".device-mockup .oneword li" ).hover( function() {
		var topic = $( this ).parents( ".topic" ),
				height = $( ".description", topic ).outerHeight()+10;

		topicAnimating = topic.attr( "tid" );

		$( ".device-mockup .up" ).each( function() {
			if( $(this).attr( "tid") !== topicAnimating ) {
				$(this).stop().animate( {
					"margin-top": "40px",
				}, 300);
			}
		});
		$( ".device-mockup .down" ).each( function() {
			if( $(this).attr( "tid") !== topicAnimating ) {
				$(this).stop().animate( {
					"margin-bottom": "40px",
				}, 300);
			}
		});

		if( topic.hasClass( "up") ) {
			topic.stop().animate( {
				"margin-top": -(height+30)+"px",
			}, 300);			
		} else {
			topic.stop().animate( {
				"margin-bottom": "-"+(height+30)+"px",
			}, 300);						
		}

	}, null);

	////////////////////////////////////////////////////////7
	// Let topic menu slide back to where it was
	$( ".device-mockup .topic" ).hover( null, function() {
		$( ".device-mockup .up" ).stop().animate( {
			"margin-top": "0px",
		}, 300);

		$( ".device-mockup .down" ).stop().animate( {
			"margin-bottom": "0px",
		}, 300);
	});


	////////////////////////////////////////////////////////7
	// Correct right margins of all topic titles
	var widths = [],
			p = ["up", "down"];

	for( var pos in p ) {
		var left = 0;
		$( "#just-for-width .topic."+p[pos] ).each( function() {
			var $this = $( this ),
					width = $( ".oneword li", $this ).outerWidth(),
					padding = parseInt( $this.attr( "padding" ) );
					
			widths.push( left );
			left += width + padding;
		});		
	}

	$( "#just-for-width" ).remove();

	$( ".device-mockup .topic" ).each( function() {
			$( this ).css( "left", widths.shift()+"px" );
	});
});