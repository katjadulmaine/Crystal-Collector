$(document).ready(function () {
 
    var wins = 0;
    var losses = 0;
    var computerRN = 0;
    var totalSoFar = 0;
    var numberOptions = [];
    var crystal1;
    var crystal2;
    var crystal3;
    var crystal4;
    var audioElement;
    function randomInRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function reset() {
        numberOptions = []
        computerRN = randomInRange(19, 120);
        while (numberOptions.length < 4) {
        if (numberOptions.indexOf(randomInRange(1,12)) === -1) {
            numberOptions.push(randomInRange(1, 12));
        }
        }
        console.log(numberOptions)
        totalSoFar = 0;
        $("#totalSoFar").text(totalSoFar);
        $("#computerRN").text(computerRN);
        crystal1 = numberOptions[0];
        crystal2 = numberOptions[1];
        crystal3 = numberOptions[2];
        crystal4 = numberOptions[3];

       
        
    };

    $("img").on("click", function () {
        $("#Crystal1").attr("data-alt", crystal1);
        $("#Crystal2").attr("data-alt", crystal2);
        $("#Crystal3").attr("data-alt", crystal3);
        $("#Crystal4").attr("data-alt", crystal4);
        console.log(crystal1, crystal2, crystal3, crystal4);
        totalSoFar += parseInt($(this).attr("data-alt"));
        $("#totalSoFar").text(totalSoFar);
        console.log($(this).attr("data-alt"));
    
        console.log(computerRN, totalSoFar);
        if (computerRN === totalSoFar) {
            wins++;
            $("#wins").text(wins);
            audioElement = document.createElement("audio");
            audioElement.setAttribute("src", "assets/audio/championCrop.mp3");
            audioElement.play();
            reset();
        }
        else if (computerRN < totalSoFar) {
            losses++;
            $("#losses").text(losses);
            audioElement = document.createElement("audio");
            audioElement.setAttribute("src", "assets/audio/loserCropBeck.mp3");
            audioElement.play();
            reset();
        }
        $(".btn-info").on("click", function () {
            audioElement.pause();
         
        });
    });  
    $(".btn").on("click", function () {
        reset();
    });
    reset();

});    