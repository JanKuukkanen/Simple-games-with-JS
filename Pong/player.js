
// player "class" with width and height parameters
function player(w, h)
{
	this.x = 50;
	this.y = 265;
	this.w = w;
	this.h = h;
	this.xspeed = 0;
	this.yspeed = 0;
	
	this.dir = function(y)
	{
		this.yspeed = y;
	}
	
	this.getCoordinates = function()
	{
		var coordinates = createVector(this.x, this.y);
		return coordinates;
	}
	
	this.getShape = function()
	{
		var scales = createVector(this.w, this.y);
		return scales;
	}
	
	this.update = function()
	{
		this.y = this.y + this.yspeed;
		this.y = constrain(this.y, 0, height - this.h);
	}
	
	this.show = function()
	{
		fill("green");
		rect(this.x, this.y, this.w, this.h);
	}
}