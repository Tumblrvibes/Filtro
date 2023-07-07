Webcam.set({
    width:400,
    height:350,
    image_format:'png',
    png_quality:90
})

camara=document.getElementById("camara");

Webcam.attach("#camara");

filtroX=0;
filtroY=0;

function preload(){
    nariz=loadImage("nariz.png");
    cabeza=loadImage("cabeza.png");
    ojos=loadImage("ojos.png");
    corona=loadImage("corona.png");
    monorojo=loadImage("moñorosa.png");

}
var filtro;
function boton1(){
    filtro="cabeza";
    console.log(filtro);
}
function boton2(){
    filtro="ojos";
    console.log(filtro);
}
function boton3(){
    filtro="corona";
    console.log(filtro);
}
function boton4(){
    filtro="monorosa";
    console.log(filtro);
}
function boton5(){
    filtro="monorojo";
    console.log(filtro);
}

function setup(){
canvas=createCanvas(300,300);
video=createCapture(VIDEO);
video.size(300,300);
video.hide();

poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log("PoseNet iniciado");
}

function gotPoses(results){
    console.log(filtro);
    if(results.length>0){
        console.log(results);
        if(filtro=="cabeza"){
           filtroX=results[0].pose.nose.x-100;
           filtroY=results[0].pose.nose.y-100;
        }
        if(filtro=="ojos"){
            filtroX=results[0].pose.nose.x-50;
            filtroY=results[0].pose.nose.y-50;
         }
         if(filtro=="monorosa"){
            filtroX=results[0].pose.nose.x-35;
            filtroY=results[0].pose.nose.y+100;
         }
         if(filtro=="monorojo"){
            filtroX=results[0].pose.nose.x-35;
            filtroY=results[0].pose.nose.y+100;
         }
        

    }
}

function draw(){
    image(video,0,0,300,300);
    if(filtro=="cabeza"){
        image(cabeza,filtroX,filtroY,200,200);
    }
    if(filtro=="ojos"){
        image(ojos,filtroX,filtroY,100,100);
    }
    if(filtro=="monorosa"){
        image(monorosa,filtroX,filtroY,100,100);
    }
    if(filtro=="monorojo"){
        image(monorojo,filtroX,filtroY,100,100);
    }
    
}