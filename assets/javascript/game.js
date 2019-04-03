$(document).ready(function () {

    var wins = -1;
    var losses = 0;
    var computerRN = 0;
    var totalSoFar = 0;
    var crystal1 = 0;
    var crystal2 = 0;
    var crystal3 = 0;
    var crystal4 = 0; 
   


    function reset() {
        totalSoFar = 0
        computerRN = Math.floor(Math.random() * 102) + 19;
        var uniqueNumber = Math.floor(Math.random() * 12) + 1;
        var crystal1 = randomNumbers[0];
        var crystal2 = randomNumbers[1];
        var crystal3 = randomNumbers[2];
        var crystal4 = randomNumbers[3];
        for (var i = 0; i < 4; i++)
            if (randomNumbers.indexOf(uniqueNumber) === -1)
                randomNumbers.push(uniqueNumber);
        console.log(crystal1, crystal2, crystal3, crystal4)

        $("#computerRn").text(computerRN);
    }

    $("img").on("click", function () {
        $("#Crystal1").attr("data-alt", crystal1);
        $("#Crystal2").attr("data-alt", crystal2);
        $("#Crystal3").attr("data-alt", crystal3);
        $("#Crystal4").attr("data-alt", crystal4);

        totalSoFar += parseInt($(this).attr("data-alt"));
        $("#totalSoFar").text(totalSoFar);
        console.log($(this).attr("data-alt"))

        if (computerRN === totalSoFar) {
            wins++
            $("#wins").text(wins);
        }
        else if (computerRN < totalSoFar) {
            losses++
            $("#losses").text(losses);
        }
    
    });

    $(".button").on("click", function () {

        reset();

    });
    reset();

});