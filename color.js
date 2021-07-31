var numberOfSquares = 15;
var numberOfOption = 15;
var len = 15;
var f = 1;
var colors = generateRandomColors(numberOfSquares);
var squares = document.querySelectorAll(".square");
var pickedcolor = pickColor();
var colorDisplay = document.getElementById("colorDisplay")

var messageDisplay = document.querySelector("#message")
var h1 = document.querySelector("h1");
var resetBtn = document.querySelector("#reset");
var modeButton = document.querySelectorAll(".mode")

init();

function init() {
    // mode buttons 
    for (var i = 0; i < modeButton.length; i++) {
        modeButton[i].addEventListener("click", function() {

            modeButton[0].classList.remove("selected");
            modeButton[1].classList.remove("selected");
            modeButton[2].classList.remove("selected");
            modeButton[3].classList.remove("selected");
            this.classList.add("selected");

            if (this.textContent === "Easy") {

                numberOfSquares = 3;
                numberOfOption = 3;
                len = 3;
                f = 1;
            } else if (this.textContent === "Medium") {
                numberOfSquares = 6;
                numberOfOption = 6;
                len = 6;
                f = 1;
            } else if (this.textContent === "Hard") {
                numberOfSquares = 9;
                numberOfOption = 9;
                len = 9;
                f = 1;
            } else {
                numberOfSquares = 15;
                numberOfOption = 15;
                len = 15;
                f = 1;
            }
            reset();

        });
    }
}

//change the html text RGB to the pickedcolor using getElement method
colorDisplay.textContent = pickedcolor;

function reset() {
    // generate all new colors
    f = 1;
    len = numberOfOption;
    colors = generateRandomColors(numberOfSquares);
    //pick a new random color from array
    pickedcolor = pickColor();
    // change colorDisplay to match picked color
    colorDisplay.textContent = pickedcolor;
    // change colors of squares;
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = "none";
        }

    }
    // remove the h1 background color to #232323;
    h1.style.background = "steelblue"
        //remove Correct message
    messageDisplay.textContent = "";
    //change the text PLAY AGAIN to New Color
    resetBtn.textContent = "New Colors"

}



resetBtn.addEventListener("click", function() {
    reset();

})
for (var i = 0; i < squares.length; i++) {


    squares[i].style.background = colors[i];
    //add click listeners to squares

    squares[i].addEventListener("click", function() {
        //store clicked color of square

        var clickedColor = this.style.background;

        if (clickedColor === pickedcolor) {
            var Score = Math.floor((len / numberOfOption) * 100);
            if (f === 1) {
                messageDisplay.textContent = "Correct! " + "Score: " + Score + "/100";
                f = 0;
            }
            resetBtn.textContent = "Play Again??"
            changeColors(clickedColor)

            // change h1 color
            h1.style.background = pickedcolor;


        } else {
            // change the color current square color = page background color , make square  invisible
            this.style.background = "#232323";
            messageDisplay.textContent = "Try Again"
        }
        len--;
    });
}

function changeColors(color) {
    // run a loop in squares array and change each squares color with the pickedcolor(color)
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = color;
    }
}

// pick random color using Math.random();
function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    // make an array and add random color to arr
    var arr = [];
    for (var i = 0; i < num; i++) {
        //get random color and push into array
        arr.push(randomColor());
    }
    //return array
    return arr;
}

function randomColor() {
    // pick three color red , green , blue;
    // red color
    var r = Math.floor(Math.random() * 256)
        // green color
    var g = Math.floor(Math.random() * 256)
        // blue color
    var b = Math.floor(Math.random() * 256)
    return "rgb(" + r + ", " + g + ", " + b + ")";

}