objects = []
img = "";
status2 = "";
function preload () {
    img=loadImage("dog_cat.jpg");
}
function setup () {
    canvas=createCanvas(500, 500) ;
    canvas.center();
    objectdetector = ml5.objectDetector('cocossd',modelloaded)
    document.getElementById("status").innerHTML = "status:detecting object"
}
function draw() {
    image(img,0,0,500,500);
    if (status2!="") {
        for (var i = 0; i < objects.length; i++) {  
            document.getElementById("status").innerHTML="Status:Detected Object"
            fill("black") 
            percent=floor(objects[i].confidence * 100);
            text(objects[i].label + " "+ percent + "%",objects[i].x + 15, objects[i].y + 15)
            noFill()
            stroke("red")
            rect (objects[i].x, objects[i].y,objects[i].width,objects[i].height)
        }
    }
}
function modelloaded(){
    console.log("status model loaded sucessfully")
    status2=true
    objectdetector.detect(img,gotresult)
}
function gotresult(error,result){
    if (error) {
        console.log ("error")
    }
    else  {
        console.log(result)
        objects=result
    }
}