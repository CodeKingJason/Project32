const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;
var format = "AM";

function preload() {
   getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
if(backgroundImg)
background(backgroundImg);

    Engine.update(engine);

    // write code to display time in correct format here
    fill("grey");
    textSize(30);
    text("Time: "+ hour + " " + format, 50, 50);

}

async function getBackgroundImg(){

    var response = await fetch ("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    console.log(response);

    var jsonData = await response.json();
    console.log(jsonData);

    var dt = jsonData.datetime;
    console.log (dt);

    hour = dt.slice(11,13);

    // add conditions to change the background images from sunrise to sunset
    if (hour>=04 && hour<=06 ){
        bg = "sunrisel.png";
        format = "AM";
        }
        
        else if (hour>=06 && hour<=08 ){
        bg = "sunrise2 .png";
        format = "AM";
        }
        
        else if(hour >= 23 && hour== 0){
        bg = "sunset10 .png";
        format = "PM";
        }
        
        else if(hour==0 && hour<=03){
        bg = "sunset11.png";
        format = "AM";
        }
        
        else{
        bg = "sunset12.png";
        format = "PM";
        }
    //load the image in backgroundImg variable here
    backgroundImg = loadImage(bg);
}
