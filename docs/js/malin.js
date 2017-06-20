$( () => {

	///////////////////////////////////////////////////////////////////////////////////
	// Generell: Handling Videos
	//
	function stopAllVideos() {
    $("video").each( function(e) {
        $( this ).get(0).pause();
    });
	}

	function startVideo() {		
    console.log("Stopped all videos before start one.");
		stopAllVideos();

		// Start the current one
    var h = $( this ).attr("href"),
    		v = $( h ).find( "video" );

    v = v && v.get(0);

    if( v ) {
	    v.currentTime = 0;
	    v.play(); 

	    console.log("Started video:"+h);   	
    }
	}

	$( "video" ).on("loadeddata", (e) => console.log("Loaded video"+e.target));

	// User presses on fear image -> start video
	$( ".fearsCall ").on( "click tap", function() {
		startVideo.call(this);
	});

	$( ".video-wrapper .control").on( "click tap", function() {
		setTimeout( () => startVideo.call(this), 1500 );
	});



	// If a modal is closed, stopp all videos
	$("body").on('hidden.bs.modal', function (e) {
    console.log("Stopped all videos after hidden.");
		stopAllVideos();

		// Set all modals back to normal when they are hidden
		$( e.target ).css({
			marginLeft: 0,
			marginRight: 0,
			opacity: 1
		})
	});

	//////////////////////////////////////////////////////////////////////////////////////
	// Handling Textsnippets
	//
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

	//////////////////////////////////////////////////////////////////////////////////////////
	// Handling Calendar
	//
	let cal = $( "#calendar" );
	cal.addClass("closed");
	$( ".container", cal ).hide();
	$( ".calendar-icon", cal ).on( "click tap", function(e) {
		cal.toggleClass("closed");
		$( ".container", cal ).fadeToggle();
	}); 

	//////////////////////////////////////////////////////////////////////////////////////////
	// Handling About
	//
	let about = $( "#about" );
	about.addClass("closed");
	$( ".container", about ).hide();
	$( ".about-icon", about ).on( "click tap", function(e) {
		about.toggleClass("closed");
		$( ".container", about ).fadeToggle();
	});

	//////////////////////////////////////////////////////////////////////////////////////////
	// Handling Welcome
	//
	let welcome = $( "#welcome" );
	welcome.addClass("closed");
	$( ".container", welcome ).hide();
	$( ".welcome-icon", welcome ).on( "click tap", function(e) {
		welcome.toggleClass("closed");
		$( ".container", welcome ).fadeToggle();
	});


	//////////////////////////////////////////////////////////////////////////////////////////
	// Handling Fear Modals
	//
	$( ".fears-modal" ).modal({ show: false });
	$( ".fears-modal .control" ).on("click tap", function(e) {
			var prev = $( this ).hasClass("prev"),
					modal = $( this ).closest(".fears-modal"),
					modal2 = $( $( this ).attr("href") ),
					anim = { opacity: 0 };

			anim[prev? "marginLeft" : "marginRight"] = -screen.width*2;

			modal2.modal("show");

			console.log("Animating: ", anim);
			modal.animate(anim, 1000, () => {
				modal.modal("hide");
			})

			e.preventDefault();
			e.stopPropagation();
	});
});