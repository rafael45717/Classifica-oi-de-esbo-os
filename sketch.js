let video;
let poseNet;
let pose;
function setup() {
  createCanvas(400, 400);
  video = createCapture(VIDEO);
  video.hide();
  poseNet = ml5.poseNet(video, modeloCarregado);
  poseNet.on('pose', gotPoses);
}

function gotPoses(poses) {
  console.log(poses)
  if(poses.lenght > 0){
    pose = poses[0].pose;
  }
}

function modeloCarregado() {
  console.log("Modelo carregado!")
}

function draw() {
  background(220);
  image(video, 0, 0);
  if(pose){
  fill(255,0,0);
  circle(pose.nose.x, pose.nose.y, 30);
  }
}

function takeSnapshot() {
  save('snapshot.png')


}


