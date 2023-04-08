function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/Jhx5x6JYa/model.json",modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error, results){
    if (error){
    console.error(error);
    } else {
        console.log(results);
        randomno_r = Math.floor(Math.random()*255)+1;
        randomno_g = Math.floor(Math.random()*255)+1;
        randomno_b = Math.floor(Math.random()*255)+1;

        document.getElementById("animal").innerHTML = 'I can hear - '+ results[0].label;
        document.getElementById("confidence").innerHTML = 'Accuracy - ' + (results[0].confidence*100).toFixed(2)+'%';
        document.getElementById("animal").style.color = "rgb("+ randomno_r + "," + randomno_g + "," + randomno_b + ")";
        document.getElementById("confidence").style.color = "rgb("+ randomno_r + "," + randomno_g + "," + randomno_b + ")";

        if (results[0].label== "Barking"){
            animalimg.src = 'DOG.gif';
        } else if (results[0].label== "Meowing"){
            animalimg.src = 'CAT.gif';
        } else if (results[0].label== "Roaring"){
            animalimg.src = 'TIGER.gif';
        } else {
           animalimg.src = 'COW.gif';
        }
    }
}