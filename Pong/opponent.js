
// opponent "class" with width and height parameters
function opponent(w, h)
{
	this.x = 950;
	this.y = 265;
	this.w = w;
	this.h = h;
	this.xspeed = 0;
	this.yspeed = 3;
	
	this.dir = function(y)
	{
		
	}
	
	this.getCoordinates = function()
	{
		var coordinates = createVector(this.x, this.y);
		return coordinates;
	}
	
	this.getShape = function()
	{
		var scales = createVector(this.w, this.h);
		return scales;
	}
	
	this.update = function(ballpos)
	{
		if (((this.y + h/2) - 15) < ballpos.y && ((this.y + h/2) + 15) > ballpos.y)
		{
			this.yspeed = 0;
		}
		else if ((this.y + h/2) > ballpos.y)
		{
			this.yspeed = -8;
		}
		else if ((this.y + h/2) < ballpos.y)
		{
			this.yspeed = 8;
		}
		
		this.y = this.y + this.yspeed;
		
		this.y = constrain(this.y, 0, height - this.h);
	}
	
	this.show = function()
	{
		fill("green");
		rect(this.x, this.y, this.w, this.h);
	}
}