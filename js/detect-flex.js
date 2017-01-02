$(function(){
	var grids = $(".works");

	if (Modernizr.flexbox) {
		grids.addClass("flex");		
	} else{
		grids.removeClass("flex");
	}
});