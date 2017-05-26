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

	$("body").on('hidden.bs.modal', function () {
		stopAllVideos();
	})
});