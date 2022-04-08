Webcam.set({
width:250,
height:200,
image_format:"jpeg",
jpeg_quality:200
})
Webcam.attach(document.getElementById("webcam"))
 function cap_image(){
    Webcam.snap(function(data_uri){
        document.getElementById("display").innerHTML='<img src='+data_uri+' id="snap">'
    }
    )
 }
 classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/8vtKIxwnA/model.json",modelLoaded)
 function modelLoaded(){
    console.log("The Model Loaded Successfully.")
 }
 function identimg(){
   var image=document.getElementById("snap")
   classifier.classify(image,getres)
 }
 function getres(error,result){
    if (error){
       console.log(error)
       
    }
    else{
       console.log(result)
       document.getElementById("obj").innerHTML=result[0].label
       document.getElementById("accur").innerHTML=result[0].confidence.toFixed(3)*100
    }
   
 }
