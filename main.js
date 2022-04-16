img = "";
var status = "";
objects = [];

function preload()
{
    img = loadImage('dog_cat.jpg');
}


function setup()
{
    canvas = createCanvas(640,420);
     canvas.position(640,400)
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Object Detected";
}


function modelLoaded()
{
    console.log("MODEL LOADED!!!");
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results)
{
    if (error)
    {
        console.log(error);
    }

        console.log(results);
        objects = results;
   
    
}

function draw()
{


    image(img,0,0,640,420);


  if(status != "")
   {
       for(i = 0; i < objects.length; i++)
       {
         document.getElementById("status").innerHTML = "Status : Object Detected";

            fill("#FF0000");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
            noFill();
            stroke("#FF0000");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);

       }
   }
}

function bike()
{
    window.open("https://mayankshahi.github.io/bike2final/");
}

function bottle()
{
    window.open("https://mayankshahi.github.io/bottle2final/");
}