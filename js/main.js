var white = [0, 0, 100];
var black = [0, 0, 27];
var red = [0, 100, 63];
var orange = [40, 100, 60];
var green = [75, 100, 40];
var blue = [196, 77, 55];
var purple = [280, 50, 60];

var myName = "Tech Solutions";
var letterColors = [orange, green, blue]
if(22 > 12) {
    bubbleShape = "circle";
}
else {
    bubbleShape = "square";
}


drawName(myName, letterColors);
bounceBubbles();

$('canvas').click(function ()	{
		$(this).slideUp () ;
	});
	
$('#orange').click(function ()	{
		$(this).slideUp () ;
	});
	
$('#green').click(function ()	{
		$(this).slideUp	()	;
	});
