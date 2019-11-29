function Menu(){
    document.body.style.backgroundImage = 'linear-gradient(315deg, #000000 0%, #7f8c8d 74%)';
    document.body.style.height = window.innerHeight + 'px';
    document.body.style.overflow = 'hidden';
    document.body.style.margin = 0;
    document.body.style.fontFamily = "Impact";
    document.body.style.color = "white";
    document.body.style.padding = 0;
    document.body.style.backgroundRepeat = 'no-repeat';
    var Heading = document.createElement('h1');
    document.body.appendChild(Heading);
    Heading.textContent = "The Rocket Block";
    Heading.style.width = window.innerWidth * (30/100) + 'px';
    Heading.style.marginTop = (window.innerHeight * (11/100)) + 'px';
    Heading.style.fontSize = window.innerWidth * (4/100) + 'px';
    Heading.style.marginLeft = ((window.innerWidth * (67/100)) - ((window.innerWidth * (30/100)))) + 'px';
    var StartButton = document.createElement('button');
    document.body.appendChild(StartButton);
    StartButton.textContent = "Start";
    StartButton.style.marginTop = (window.innerHeight * (16/100)) + 'px';
    StartButton.style.marginLeft = ((window.innerWidth * (78/100)) - ((window.innerWidth * (30/100)))) + 'px';
    StartButton.style.backgroundColor = "transparent";
    StartButton.style.border = "2px solid #fff";
    StartButton.style.fontSize = window.innerWidth * (2/100) + 'px';
    StartButton.style.color = "white";
    StartButton.style.borderRadius = "50px";
    var Rules = document.createElement('Button');
    document.body.appendChild(Rules);
    Rules.textContent = "Rules";
    Rules.style.marginTop = (window.innerHeight * (16/100)) + 'px';
    Rules.style.marginLeft = ((window.innerWidth * (77.5/100)) - ((window.innerWidth * (30/100)))) + 'px';
    Rules.style.backgroundColor = "transparent";
    Rules.style.border = "2px solid #fff";
    Rules.style.fontSize = window.innerWidth * (2/100) + 'px';
    Rules.style.color = "white";
    Rules.style.borderRadius = "50px";
    StartButton.addEventListener('click',function(){
        RemoveMenu();
    })
    Rules.addEventListener('click', function(){
        alert("The Block is controlled using Mouse, it can only move left or right.Click the left button on mouse to shoot the Rocket.Shoot rocket to stop bomb from being dropped on the ground. If the Rocket hits the Bomb before it touch the ground then 10 score will be gained. when bomb touch the ground the health decreases and if health get zero then the game is over. The score is not limited");
    
    })
    function RemoveMenu(){
        document.body.style.backgroundImage = 'linear-gradient(to top, #00eeff, #6DD5FA, #44aaff)';
        document.body.style.height = window.innerHeight + 'px';
        document.body.style.overflow = 'hidden';
        document.body.style.backgroundSize = "cover";
        document.body.style.margin = 0;
        document.body.style.fontFamily = "Impact";
        document.body.style.color = "white";
        document.body.style.padding = 0;
        document.body.style.backgroundRepeat = 'no-repeat';
        document.body.removeChild(Heading);
        document.body.removeChild(StartButton);
        document.body.removeChild(Rules);
        GameOn();
    }
}
function GameOn(){
document.body.style.backgroundColor = "#00eeff";
document.body.style.margin = 0;
document.body.style.padding = 0;
var score = 0;
var ScoreBoard = document.createElement('h1');
ScoreBoard.style.marginLeft = window.innerWidth - (window.innerWidth * (15/100)) + 'px';
ScoreBoard.style.position = 'fixed';
document.body.appendChild(ScoreBoard);
var health = document.createElement('div');
document.body.appendChild(health);
var Hbar = (window.innerWidth * (5/100)) + 10;
health.style.border = "2px solid black";
health.style.backgroundColor = "#00ff00";
health.style.height = window.innerHeight * (2/100) + 'px';
health.style.marginTop = (window.innerHeight * (5/100)) + 'px';
health.style.marginLeft = (window.innerWidth * (5/100)) + 'px'; 
health.style.position = "fixed";
var tank = document.createElement('div');
document.body.appendChild(tank);
var ground = document.createElement('div');
document.body.appendChild(ground);
ground.style.height = window.innerHeight - (window.innerHeight * (8/100)) + 'px';
ground.style.marginTop = window.innerHeight - (window.innerHeight * (10/100)) + 'px';
ground.style.width = window.innerWidth + 'px';
ground.style.position = "fixed";
ground.style.backgroundImage = "url('Ground.png')";
tank.style.backgroundColor = "blue";
tank.style.position = "absolute";
tank.style.height = window.innerHeight * (5/100) + 'px';
tank.style.width = window.innerWidth * (7/100) + 'px';
tank.style.marginTop = window.innerHeight - (window.innerHeight * (15/100)) + 'px';
window.addEventListener('mousemove',function(){
    x = event.clientX;
    if(x > (window.innerWidth - (window.innerWidth * (7/100))) ){
        x = (window.innerWidth - (window.innerWidth * (7/100)));
    }
    else{
        x = event.clientX;
    }
    tank.style.marginLeft = x + 'px';
});

var y1 = '';
var x1 = '';
var y2 = '';
var x2 = '';
var healt = 100;
function GameOver(){
    healt = 100;
    alert("Game Over. Don't worry you are going back to the main menu, from there you can start again if you want to. :)");
    location.reload();
}
window.addEventListener("click",function(){
    const By = event.clientX;   
    var y = window.innerHeight - 200
    var bullet = document.createElement("img");
    bullet.style.height = '76px';
    bullet.style.width = '25px';
    bullet.style.marginTop = (window.innerHeight - 100) +'px';
    bullet.style.marginLeft = (By - (25/2)) + 'px';
    bullet.style.position = 'fixed';
        var int = setInterval(moveUp, 10);
        function moveUp(){
            bullet.src = 'missile.png';
         for(var i = 0; i < 1; i++){
            y= y - 10;
            bullet.style.marginTop = y + 'px';
            y1 = y;
            x1 = (By - (25/2));
            if(y < 0){
            clearInterval(int)
            bullet.style.display = 'none';
            y = (window.innerHeight - 100);
        }
        } 
        document.body.appendChild(bullet);
        var Dis = Math.sqrt((Math.pow((x2 - x1),2)) + (Math.pow((y2 - y1),2)))
        if(Dis < 20){
            document.body.removeChild(bullet);
            clearInterval(int)
            bullet.style.display = 'block';
            y = (window.innerHeight - 100);
            score = score + 10;
            ScoreBoard.innerHTML = 'Score : ' + score;
            console.log('Score:',score);
        }
    }
})

var Range = setInterval(BombDrop, 5000);
function BombDrop(){
var bomb = document.createElement("img");
var BombX = Math.ceil(Math.random() * ((window.innerWidth - 100) - 100) + 100);
var l = 0;
bomb.style.height = '50px';
bomb.style.width = '25px';
bomb.style.marginTop = 0;
bomb.style.marginLeft = BombX +'px';
bomb.style.position = 'fixed';
    var int = setInterval(moveDown, 10);
    function moveDown(){
        bomb.src = 'bomb.png';
     for(var i = 0; i < 1; i++){
        l= l + 5;
        bomb.style.marginTop = l + 'px';
        y2 = l;
        x2 = BombX;
        if(l > (window.innerHeight - (window.innerHeight * (15/100)))){
        clearInterval(int)
        bomb.style.display = 'none';
        healt = healt - 20;
        console.log('Health:',healt);
        if(healt <= 0){
            GameOver();
        }
        health.style.width = healt + 'px';
        y = 0;
    }
    } 
    document.body.appendChild(bomb);
    var Dis = Math.sqrt((Math.pow((x2 - x1),2)) + (Math.pow((y2 - y1),2)))    
    if(Dis < 20){
        document.body.removeChild(bomb);
        clearInterval(int)
        bomb.style.display = 'none';
        y = 0;
    }
}
}
}









//Game By Pratyush Bhatnagar