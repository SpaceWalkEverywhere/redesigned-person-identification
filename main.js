function setup() {
  canvas = createCanvas(350, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  img=0;
  classify=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/zA8oSLkCk/model.json',md);
}
function draw(){
  if(img==0){
  image(video,0,0,350,300);
  classify.classify(video,results);
  }
  else{
    fill("#ffffff");
   rect(0,0,350,300);
  }
}
function on(){
  if(img==0){
  img=1;
  document.getElementById("ob").innerHTML="cam on";
  document.getElementById("ob").class="btn btn-success";
  }
  else{
    img=0;
    document.getElementById("ob").innerHTML="cam off";
   document.getElementById("ob").class="btn btn-danger";
  }
}
function md(){
  console.log('woohoo!!!model loaded'+ml5.version);
}
function results(error,res){
  if(error){
    console.error(error);
  }
  else{
  console.log(res);
  document.getElementById("res-obj").innerHTML=res[0].label;
  document.getElementById("res-Acc").innerHTML=res[0].confidence.toFixed(3)*100+' %';
  }
}
