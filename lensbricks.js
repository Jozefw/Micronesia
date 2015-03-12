$( function() {
	var navBtns$ = $( '.navBtn'),
		aboutPage$ = $( '#aboutPage' ),
		teamPage$ = $( '#teamPage' );

	var fadeInSpeed = 550,
		currentlyShowing = "";

	navBtns$.on( 'click', function(e) {
		var who = $(e.target).text();
		console.log( 'click on ' + who );


		if ( currentlyShowing !== "" ) {
			if ( currentlyShowing === "about" ) {
				aboutPage$.hide();
			} else
			if ( currentlyShowing === "team" ) {
				teamPage$.hide();
			}
		}

		if ( who === 'about' ) {
			aboutPage$.show( fadeInSpeed);
			currentlyShowing = 'about';
		} else
		if ( who === 'team' ) {
			teamPage$.show( fadeInSpeed );
			currentlyShowing = 'team';
		}

	});

});