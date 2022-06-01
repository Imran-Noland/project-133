img= "";
status= "";
objects= [];
function preload(){
img= loadImage("tv.webp");
}
function setup(){
canvas= createCanvas(1000, 800);
canvas.center();
objectDetector= ml5.objectDetector("cocossd", modelLoaded);
document.getElementById("status").innerHTML= "Status: Detecting Objects";
    
}
function modelLoaded(){
console.log("modelLoaded");
status= true;
objectDetector.detect(img, gotResults);
}
function gotResults(error, results){
if(error){
console.log(error);
}
console.log(results);
objects= results;
}
function draw(){
image(img, 0, 0, 1000, 800);
if(status != ""){
    for(i=0;i<objects.length;i++){
    document.getElementById("status").innerHTML= "status: Object Detected";
    fill("#ff0000");
    percent= floor(objects[i].confidence*100);
    text(objects[i].label + " " + percent + "%", objects[i].x+15, objects[i].y+15);
    noFill();
    stroke("#ff0000");
    rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
    }
    }
}
function back(){
window.location= "index.html";
}