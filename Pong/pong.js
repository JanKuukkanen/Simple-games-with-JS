var gamestarted = false;

var player;
var opponent;
var ball;

var gametext = "Begin game";
var playerpoints = 0;
var opponentpoints = 0;

var debug_message = "No message";

function setup()
{
	createCanvas(1000, 600);
	frameRate(60);
	player = new player(20, 70);
	opponent = new opponent(20, 70);
	ball = new ball(10, 10);
}

function draw()
{
	background(51);
	fill(204, 102, 0);
	text(gametext, 470, 250);
	text(playerpoints, 480, 20);
	text(opponentpoints, 520, 20);
	text(debug_message, 20, 580);
	
	updateObjects();
	collisionDetection();
	edgeCollisions();
	renderObjects();
}

function startGame()
{
	ball.startMoving();
}

function collisionDetection()
{
	var pp = player.getCoordinates();
	var ps = player.getShape();
	
	var op = opponent.getCoordinates();
	var os = opponent.getShape();
	
	var bd = ball.getDirection();
	
	debug_message = pp;
	
	if (bd.x < 0)
	{
		var playercollision = ball.collision(pp, ps);
		
		if (playercollision == true)
		{
			ball.accelerateX();
		}
	}
	else if (bd.x > 0)
	{
		var opponentcollision = ball.collision(op, os);
		
		if (opponentcollision == true)
		{
			ball.accelerateX();
		}
	}
}

function edgeCollisions()
{
	var bc = ball.getCoordinates();
	
	if (bc.x < 0)
	{
		pointScored(0);
	}
	else if (bc.x > width)
	{
		pointScored(1);
	}
	
	if (bc.y < 0)
	{
		ball.accelerateY();
	}
	else if (bc.y > height)
	{
		ball.accelerateY();
	}
}

function pointScored(competitor)
{
	if (competitor === 0)
	{
		// opponent scores
		opponentpoints++;
		ball.resetBall();
	}
	else if (competitor === 1)
	{
		playerpoints++;
		ball.resetBall();
	}
}

function updateObjects()
{
	player.update();
	
	var bcrd = ball.getCoordinates();
	opponent.update(bcrd);
	
	
	ball.update();
}

function renderObjects()
{
	player.show();
	opponent.show();
	ball.show();
}

function keyPressed() {
	if (keyCode === UP_ARROW)
	{
		player.dir(-7);
	}
	else if (keyCode === DOWN_ARROW)
	{
		player.dir(7);
	}
	else if (keyCode === 32)
	{
		gamestarted = true;
		gametext = "";
		startGame();
	}
}

function keyReleased()
{
	if (keyCode === UP_ARROW)
	{
		player.dir(0);
	}
	
	if (keyCode === DOWN_ARROW)
	{
		player.dir(0);
	}
}