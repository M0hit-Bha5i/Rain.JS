var c = document.getElementById("place_of_rain");
var ctx = c.getContext("2d");
c.height = window.innerHeight; //change to specific height if needed.
c.width = window.innerWidth; //change to specific width if needed.
var rain = "0";
var font_size = 1; 
var columns = c.width//number of columns for the rain
var drops = [];//an array of drops (one per column)
//x below is the x coordinate
//1 = y co-ordinate of the drop(same for every drop initially)
for(var x = 0; x < columns; x++)
	drops[x] = 1000; 
//drawing the characters
function draw()
{

	//translucent background to show trail
	ctx.fillStyle = "rgba(41, 128, 185, 0.05)";// ”Belize Hole” background color, can be changed. 
	ctx.fillRect(0, 0, c.width, c.height);
	ctx.fillStyle = "#fff"; //white drops, color can be changed.
	ctx.font = font_size + "px arial";
	//looping over drops
	for(var i = 0; i < drops.length; i++)
	{
		//x = i*font_size, y = value of drops[i]*font_size
		ctx.fillText(rain, i*font_size, drops[i]*font_size);
		//sending the drop back to the top randomly after it has crossed the screen
		//adding a randomness to the reset to make the drops scattered on the Y axis
		if(drops[i]*font_size > c.height && Math.random() > 0.98)
			drops[i] = 3;    //start somewhere below
		//incrementing Y coordinate
		drops[i]+=2;
	}
}
setInterval(draw, 1); //draw every 1 millisecond

