var canvas = document.getElementById("myCanvas");
 ctx = canvas.getContext("2d");
var oldLocationx = 10;
var oldLocationy = 10;
var cellWidth= 50;
var cellHeight = 50;
var snake = [];
var gameClockSpeed = 50;
snake.push({x:0,y:0,oldx:0,oldy:0});
snake.push({x:500,y:0,oldx:0,oldy:0});

var food = {x:500,y:500};
document.onkeydown = function (e) {
    switch (e.key) {
        case 'ArrowUp':
            // up arrow
            if(currentMotionY == 1){return;};
            currentMotionX = 0;
            currentMotionY = -1;

            break;
        case 'ArrowDown':
        if(currentMotionY == -1){return;};
            currentMotionX = 0;
            currentMotionY = 1;

            // down arrow
            break;
        case 'ArrowLeft':
        	if(currentMotionX != 1){
	            currentMotionX = -1;
	            currentMotionY = 0;
        	}
            // left arrow
            break;
        case 'ArrowRight':
        if(currentMotionX != -1){
            currentMotionX = 1;
            currentMotionY = 0;
        }  
            // right arrow
    }
};
/*
x =1, y = 0 = right 
x =-1, y = 0 = left 
x =0, y = 1 = up
x=0, y = -1 = down;
*/
var currentMotionX = 1;
var currentMotionY = 0;
var snakeSpeed = 50;
function Draw(){


	//console.log(snake.length)
	clear();
	ctx.fillStyle = "red";
	ctx.fillRect(food.x,food.y,cellWidth,cellHeight);
	ctx.fillStyle = "blue";

	for ( i = 0; i < snake.length; ++i) {
		if(i===0){
			ctx.fillStyle = "green";
			ctx.fillRect(snake[i].x,snake[i].y,cellWidth,cellHeight);
			ctx.fillStyle = "blue";
		}else{
		ctx.fillRect(snake[i].x,snake[i].y,cellWidth,cellHeight);
		}
			snake[i].oldx = snake[i].x;
		//console.log(snake[i].oldx);
		snake[i].oldy = snake[i].y;	
		if (i==0) {
			if(isOverLapping(snake[i],food)){
				MoveFood();
				AddNewCell();
			}
			for ( j = 0; j < snake.length; ++j) {
				if(isOverLapping(snake[j], snake[0]) && i!=j){
					console.log('snake ' + j + "is overlapping snake " + i);
					EndGame();
				}
			}
			snake[i].x += currentMotionX*snakeSpeed;
			snake[i].y += currentMotionY*snakeSpeed;
		}
		if(i!=0){
			snake[i].x = snake[i-1].oldx;
			snake[i].y = snake[i-1].oldy;
		}
		if (snake[i].x > canvas.width ) {
			snake[i].x = 0;
			
		}
		if (snake[i].y > canvas.height ) {
			snake[i].y = 0;
			
		}
		if (snake[i].x <  0) {
			snake[i].x = canvas.width;		
		}
		if (snake[i].y < 0 ) {
			snake[i].y = canvas.height;
			
		}
	}
}
function isOverLapping(object1,object2){
	var startingRangeobjx1 =object1.x;
	var endingRangeobjx1 =object1.x + cellWidth-1;
	var startingRangeobjy1 =object1.y;
	var endingRangeobjy1 =object1.y + cellHeight-1;
	if (object2.x >= startingRangeobjx1 && object2.x <= endingRangeobjx1 && object2.y >= startingRangeobjy1 && object2.y <= endingRangeobjy1  ) {
		return true;
	}
}
function MoveFood(){
	food.x = (Math.floor((Math.random()*10))/10) * canvas.width;
	food.y = (Math.floor((Math.random()*10))/10) * canvas.height;
}
function AddNewCell(){
snake.push({x:-100,y:0,oldx:0,oldy:100});
}
setInterval(Draw,gameClockSpeed);

function clear(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}
function EndGame (){
	alert("GG Your Score: " + snake.length);
	snake.length =2;
//location.reload();
}