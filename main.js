var canvas=new fabric.Canvas('myCanvas');
player_x=10;
player_y=10;
blockImageWidth=30;
blockImageHeight=30;
var playerObject="";
var blockImageObject="";

function player_update()
{
    fabric.Image.fromURL("player.png", function(Img){
        playerObject=Img;
        playerObject.scaleToWidth(150);
        playerObject.scaleToHeight(140);
        playerObject.set({
            top:player_y,
            left:player_x
        });
        canvas.add(playerObject);
    });
}

function new_image(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        blockImageObject=Img;
        blockImageObject.scaleToWidth(blockImageWidth);
        blockImageObject.scaleToHeight(blockImageHeight);
        blockImageObject.set({
            top:player_y,
            left:player_x
        });
        canvas.add(blockImageObject);
    })
}

window.addEventListener("keydown",my_keydown);
function my_keydown(e)
{
    keyPressed=e.keyCode;
    console.log(keyPressed);
}
if(e.shiftKey ==true && keyPressed == '80'){
    console.log("p and shift key pressed together");
    blockImageWidth = blockImageWidth + 10;
    blockImageHeight = blockImageHeight + 10;
    document.getElementById("current_width").innerHTML = blockImageWidth;
    document.getElementById("current_height").innerHTML = blockImageHeight;
}
if(e.shiftKey ==true && keyPressed == '77'){
    console.log("m and shift key pressed together");
    blockImageWidth = blockImageWidth - 10;
    blockImageHeight = blockImageHeight - 10;
    document.getElementById("current_width").innerHTML = blockImageWidth;
    document.getElementById("current_height").innerHTML = blockImageHeight;
}
if(keyPressed == '37'){
    left();
    console.log("left");
}
if(keyPressed == '38'){
    up();
    console.log("up");
}
if(keyPressed == '39'){
    right();
    console.log("right");
}
if(keyPressed == '40'){
    down();
    console.log("down");
}

if(keyPressed == '87'){
    new_image('wall.jpg');
    console.log("w");
}
if(keyPressed == '71'){
    new_image('ground.png');
    console.log("g");
}
if(keyPressed == '76'){
    new_image('light_green.png');
    console.log("l");
}
    if(keyPressed == '84'){
        new_image('trunk.jpg');
        console.log("t");
    }
    if(keyPressed == '82'){
        new_image('roof.jpg');
        console.log("r");
    }
    if(keyPressed == '89'){
        new_image('yellow_wall.png');
        console.log("y");
    }
    if(keyPressed == '68'){
        new_image('dark_green.png');
        console.log("d");
    }
    if(keyPressed == '85'){
        new_image('unique.png');
        console.log("u");
    }
    if(keyPressed == '67'){
        new_image('cloud.jpg');
        console.log("c");
    }
    function up(){
        if(player_y>=0)
        {
            player_y=player_y-blockImageHeight;
            console.log("block image height"+blockImageHeight);
            console.log("When up arrow key is pressed, X="+player_x+",Y="+player_y);
            canvas.remove(playerObject);
            player_update();
        }
    }

    function down(){
        if(player_y<=500)
        {
            player_y=player_y-blockImageHeight;
            console.log("block image height"+blockImageHeight);
            console.log("When down arrow key is pressed, X="+player_x+",Y="+player_y);
            canvas.remove(playerObject);
            player_update();
        }
    }

    function left(){
        if(player_x>=0)
        {
            player_x=player_x-blockImageHeight;
            console.log("block image width"+blockImageWidth);
            console.log("When left arrow key is pressed, X="+player_x+",Y="+player_y);
            canvas.remove(playerObject);
            player_update();
        }
    }

    function right(){
        if(player_y<=850)
        {
            player_y=player_y-blockImageHeight;
            console.log("block image width"+blockImageWidth);
            console.log("When right arrow key is pressed, X="+player_x+",Y="+player_y);
            canvas.remove(playerObject);
            player_update();
        }
    }