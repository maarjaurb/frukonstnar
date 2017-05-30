$( () => {

	function stopAllVideos() {
    $("video").each( function(e) {
        $( this ).get(0).pause();
    });
	}

	$( "video" ).on("loadeddata", (e) => console.log("Loaded video"+e.target));

	// User presses on fear image -> start video
	$( ".fearsCall ").on( "click tap", function() {
		// Stopp all videos
		stopAllVideos()

		// Start the current one
    var v = $( $( this ).attr("href") ).find( "video" );

    v = v && v.get(0);

    if( v ) {
	    v.currentTime = 0;
	    v.play();    	
    }
	});

	// If a modal is closed, stopp all videos
	$("body").on('hidden.bs.modal', function (e) {
		stopAllVideos();

		let parent = $( e.target ).attr( "parent" );

		if( parent ) {
			setTimeout( () => {
				debugger;
				$( parent ).trigger("mouseover");
				$( parent ).trigger("mouseout");
			}, 200)		
		}
	});


	// Switch on the first topic of each filter in textsnippets
	var href = $( "#textsnippets .filters li:nth-child(1) a").attr("href");
	$( href + " ul li span" ).trigger( "click" );

	$( ".filters li").on( "click tap", function() {
		var href = $( this ).find( "a" ).attr( "href" );
		$( href + " ul li:nth-child(1) span" ).trigger( "click" ).addClass("active");		
	});

	$( ".filter").on( "click tap", function() {
		$( this ).addClass("active");
	});
});