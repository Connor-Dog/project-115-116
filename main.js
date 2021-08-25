noseX=0;
noseY=0;
function preload(){
clown_nose=loadImage('https://th.bing.com/th/id/R.1f95f03e8759404d27a767f1c5769eb8?rik=JBRAmAHFlDXXDg&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f2016%2f04%2fMoustache-PNG-Image.png&ehk=gcXdlvLVZ%2fgoMxfuAKltlbcJBRgtKy6Z2P7P0N5WdNg%3d&risl=&pid=ImgRaw&r=0');
}
function setup(){
canvas=createCanvas(300,300);
canvas.center();
video=createCapture(VIDEO);
video.size(300,300);
video.hide();

poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}
function modelLoaded(){
console.log("poseNet is initialized");
}

function gotPoses(results){
if(results.length >0){
console.log(results);
noseX=results[0].pose.nose.x-50;
noseY=results[0].pose.nose.y-30;
}
}
function draw(){
image(video,0,0,300,300);
image(clown_nose,noseX,noseY,100,100);
}
function take_snapshot(){
save('connor.png');
}