
// ball "class" with width and height parameters
function ball(w, h)
{
	this.x = 500;
	this.y = 300;
	this.w = w;
	this.h = h;
	this.xspeed = 0;
	this.yspeed = 0;
	
	this.startMoving = function()
	{
		this.xspeed = 1;
		this.yspeed = 1;
	}
	
	this.accelerateX = function()
	{
		if (this.xspeed < 0)
		{
			this.xspeed--;
		}
		else if (this.xspeed > 0)
		{
			this.xspeed++;
		}
		
		this.xspeed = this.xspeed * -1;
	}
	
	this.accelerateY = function()
	{
		if (this.yspeed < 0)
		{
			this.yspeed--;
		}
		else if (this.yspeed > 0)
		{
			this.yspeed++;
		}
		
		this.yspeed = this.yspeed * -1;
	}
	
	this.getDirection = function()
	{
		var coordinates = createVector(this.xspeed, this.yspeed);
		return coordinates;
	}
	
	this.getCoordinates = function()
	{
		var coordinates = createVector(this.x, this.y);
		return coordinates;
	}
	
	this.collision = function(pos, shape)
	{
		var d = collideRectCircle(pos.x, pos.y, shape.x, shape.y, this.x, this.y, this.w, this.h);
		return d;
	}
	
	this.resetBall = function()
	{
		this.x = 500;
		this.y = 300;
		this.xspeed = 1;
		this.yspeed = -0.5;
	}
	
	this.update = function()
	{
		this.x = this.x + this.xspeed;
		this.y = this.y + this.yspeed;
	}
	
	this.show = function()
	{
		fill("red");
		ellipse(this.x, this.y, this.w, this.h);
	}
}