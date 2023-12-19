function start(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/kR-MOm4_z/model.json',modelReady);
}

function modelReady(){
    console.log("Model Loaded!");
    classifier.classify(gotResult);
//function of ml5. compares captured audio with model.
}

function gotResult(error,result){
    if(error){
        console.error(error);
    }
    else{
        console.log(result);

        randomR = Math.floor(Math.random()*255) + 1;
        randomG = Math.floor(Math.random()*255) + 1;
        randomB = Math.floor(Math.random()*255) + 1;

        document.getElementById("hear").innerHTML="I can hear-" + result[0].label;
        document.getElementById("confident").innerHTML="Accuracy-" + (result[0].confidence * 100).toFixed(4) + "%";

        document.getElementById("hear").style.color = "rgb("+randomR+","+randomG+","+randomB+")";
        document.getElementById("confident").style.color = "rgb("+randomR+","+randomG+","+randomB+")";

        img1 = document.getElementById("mob1");
        img2 = document.getElementById("mob2");
        img3 = document.getElementById("mob3");
        img4 = document.getElementById("mob4");
        img5 = document.getElementById("mob5");

        if(result[0].label == "Background Noise"){
            img1.src = "noob dance.gif";
            img2.src = "Villager.png";
            img3.src = "enderman.webp";
            img4.src = "ghast.jpeg";
            img5.src = "creeper.png";
        }

        else if(result[0].label == "Vilager noise")
        {
            img1.src = "Noob.webp";
            img2.src = "villager.gif";
            img3.src = "enderman.webp";
            img4.src = "ghast.jpeg";
            img5.src = "creeper.png";
        }

        else if(result[0].label == "Enderman noise")
        {
            img1.src = "Noob.webp";
            img2.src = "Villager.png";
            img3.src = "enderman.gif";
            img4.src = "ghast.jpeg";
            img5.src = "creeper.png";
        }

        else if(result[0].label == "Ghast noise")
        {
            img1.src = "Noob.webp";
            img2.src = "Villager.png";
            img3.src = "enderman.webp";
            img4.src = "ghast.gif";
            img5.src = "creeper.png";
        }

        else
        {
            img1.src = "Noob.webp";
            img2.src = "Villager.png";
            img3.src = "enderman.webp";
            img4.src = "ghast.jpeg";
            img5.src = "creeper.gif";  
        }
    }
}