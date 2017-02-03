
$( () => {

	////////////////////////////////////////////////////////7
	// Lift topic menu up
	var topicAnimating = null;
	$( ".device-mockup .oneword li" ).hover( function() {
		var topic = $( this ).parents( ".topic" ),
				height = $( ".description", topic ).outerHeight()+10;

		topicAnimating = topic.attr( "tid" );

		$( ".device-mockup .topic" ).each( function() {
			if( $(this).attr( "tid") !== topicAnimating ) {
				$(this).stop().animate( {
					"margin-top": "40px",
				}, 300);
				console.log("Hiding", $(this).attr( "tid"));
			}
		});

		topic.stop().animate( {
			"margin-top": "-"+height+"px",
		}, 300);
		console.log("Showing", topic.attr( "tid" ));

	}, null);

	////////////////////////////////////////////////////////7
	// Let topic menu slide back to where it was
	$( ".device-mockup .topic" ).hover( null, function() {
		console.log("Going back", $(this).attr( "tid"));
		$( ".device-mockup .topic" ).stop().animate( {
			"margin-top": "0px",
		}, 300);
	});


	////////////////////////////////////////////////////////7
	// Correct right margins of all topic titles
	var widths = [];
	$( "#just-for-width .topic" ).each( function() {
		var $this = $( this ),
				width1 = $this.outerWidth(),
				width2 = $( ".oneword li", $this ).outerWidth();
				
		widths.push( width2 - width1 );
	});

	$( "#just-for-width" ).remove();

	$( ".device-mockup .topic" ).each( function() {
			var $this = $( this ),
					padding = parseInt( $this.attr( "padding" ) );

			$this.css( "margin-right", (widths.shift()+padding)+"px" );
	});
});