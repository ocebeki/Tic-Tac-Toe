var gameWrapper = document.getElementById('gameWrapper');
var square = document.getElementsByClassName('square');
var mssgWrapper = document.querySelector(".mssgWrapper");
var endMssg = document.querySelector(".endMssg")
var playAgain = document.getElementById("playAgain")



var playerOne = "X";
var playerTwo = "O";

var xWin = false;

var firstTurn = 1;
var movesMade = 0;
var arr = ["", "", "", "", "", "", "", "", ""];

arr.forEach(function () {
    var content = "";

    for (var i = 0; i < arr.length; i++) {
        var squareId = "sq" + i;
        content = content + '<div class="square' + " " + squareId + '"></div>';
    }
    gameWrapper.innerHTML = content;
})



//var mark = function (e) {
//
//    var target = e.target;
//    if (firstTurn === 1 && !target.classList.contains("x") && !target.classList.contains("0") && target.classList.contains("square")) {
//        target.innerHTML = playerOne;
//        target.classList.add("x");
//        target.style.cursor = "default";
//        firstTurn++
//        movesMade++
//
//    } else if (!target.classList.contains("x") && !target.classList.contains("0") && target.classList.contains("square")) {
//        target.innerHTML = playerTwo
//        target.classList.add("0");
//        target.style.cursor = "default";
//        firstTurn--
//        movesMade++
//    }
//    check()
//
//}


gameWrapper.addEventListener("click", (e) => {

    var target = e.target;
    if (firstTurn === 1 && !target.classList.contains("x") && !target.classList.contains("0") && target.classList.contains("square")) {
        target.innerHTML = playerOne;
        target.classList.add("x");
        target.style.cursor = "default";
        firstTurn++
        movesMade++

    } else if (!target.classList.contains("x") && !target.classList.contains("0") && target.classList.contains("square")) {
        target.innerHTML = playerTwo
        target.classList.add("0");
        target.style.cursor = "default";
        firstTurn--
        movesMade++
    }
    check()

});




let moves = Array.prototype.slice.call(square);

function check() {


    if (moves[0].classList.contains("x") &&
        moves[1].classList.contains("x") &&
        moves[2].classList.contains("x")) {

        win()

    } else if (moves[3].classList.contains("x") &&
        moves[4].classList.contains("x") &&
        moves[5].classList.contains("x")) {

        xWin = true;
        win()


    } else if (moves[6].classList.contains("x") &&
        moves[7].classList.contains("x") &&
        moves[8].classList.contains("x")) {

        xWin = true;
        win()


    } else if (moves[0].classList.contains("x") &&
        moves[3].classList.contains("x") &&
        moves[6].classList.contains("x")) {

        xWin = true;
        win()


    } else if (moves[1].classList.contains("x") &&
        moves[4].classList.contains("x") &&
        moves[7].classList.contains("x")) {

        xWin = true;
        win()

        console.log("Xwin1")
    } else if (moves[2].classList.contains("x") &&
        moves[5].classList.contains("x") &&
        moves[8].classList.contains("x")) {

        xWin = true;
        win()


    } else if (moves[0].classList.contains("x") &&
        moves[4].classList.contains("x") &&
        moves[8].classList.contains("x")) {

        xWin = true;
        win()

    } else if (moves[2].classList.contains("x") &&
        moves[4].classList.contains("x") &&
        moves[6].classList.contains("x")) {

        xWin = true;
        win()


    } else if (moves[0].classList.contains("0") &&
        moves[1].classList.contains("0") &&
        moves[2].classList.contains("0")) {

        xWin = true;
        win()


    } else if (moves[3].classList.contains("0") &&
        moves[4].classList.contains("0") &&
        moves[5].classList.contains("0")) {

        win()


    } else if (moves[6].classList.contains("0") &&
        moves[7].classList.contains("0") &&
        moves[8].classList.contains("0")) {
        win()


    } else if (moves[0].classList.contains("0") &&
        moves[3].classList.contains("0") &&
        moves[6].classList.contains("0")) {
        win()


    } else if (moves[1].classList.contains("0") &&
        moves[4].classList.contains("0") &&
        moves[7].classList.contains("0")) {
        win()

        c
    } else if (moves[2].classList.contains("0") &&
        moves[5].classList.contains("0") &&
        moves[8].classList.contains("0")) {
        win()


    } else if (moves[0].classList.contains("0") &&
        moves[4].classList.contains("0") &&
        moves[8].classList.contains("0")) {
        win()


    } else if (moves[2].classList.contains("0") &&
        moves[4].classList.contains("0") &&
        moves[6].classList.contains("0")) {
        win()


    } else if (movesMade > 8) {

        mssgWrapper.style.display = "flex";
        endMssg.innerHTML = '<h1>DRAW</h1>';
        gameWrapper.style.filter = "blur(6px)";
    }
}


function win() {


    mssgWrapper.style.display = "flex";

    gameWrapper.style.filter = "blur(6px)";

    if (xWin === true) {
        endMssg.innerHTML = '<h1> X Win</h1>';

    } else {
        endMssg.innerHTML = '<h1>0 Win</h1>';
    }

}

playAgain.addEventListener("click", function () {

    location.reload();
})
