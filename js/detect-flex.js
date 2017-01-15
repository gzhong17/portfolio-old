$(function(){
	var grids = $(".works");
	var cols = $(".columns");

	if (Modernizr.flexbox) {
		grids.addClass("flex");
		cols.addClass("flex");		
	} else{
		grids.removeClass("flex");
		cols.removeClass("flex");
	}
});