 var colors = []
 var pickedColor
 var mode = 6

 var squares = document.querySelectorAll(".square");
 var colorDisplay = document.querySelector("#colorDisplay");
 var messageDisplay = document.querySelector("#message");
 var h1 = document.querySelector("h1");
 var resetButton = document.querySelector("#reset");
 var modeButton = document.querySelectorAll(".mode");
 
 init();

 function init(){
    for(var i = 0; i < modeButton.length; i++){
        modeButton[i].addEventListener("click", function(){
            for(var i = 0; i < modeButton.length; i++){
                modeButton[i].classList.remove("selected")
            }
            this.classList.add("selected")
            if(this.textContent == "Easy"){
                mode = 3
            }
            else{
                mode = 6
            }
            reset()
        })
    }
    reset()
    for(var i = 0; i < squares.length; i++){
        
        squares[i].style.backgroundColor = colors[i];
        squares[i].addEventListener("click", function(){
        var clickedColor = this.style.backgroundColor;
        if (clickedColor == pickedColor){
            messageDisplay.textContent = "Correct";
            changeColor(clickedColor);
            h1.style.backgroundColor = clickedColor;
            resetButton.textContent = "Play Again?"
        }
        else{
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again";
            
        }
        })
    }
 }

 resetButton.addEventListener("click", function(){
    reset()
 })

 function changeColor(color){
     for(var i = 0; i < squares.length; i++){
         squares[i].style.backgroundColor = color;
     }
 }

 function pickColor(){
     return colors[Math.floor(Math.random() * colors.length)]
 }

 function generateRandomColors(num){
     var arr = []
     for(var i = 0; i < num; i++){
         arr.push(randomColor())
     }
     return arr
 }

 function randomColor(){
     r = Math.floor(Math.random() * 256)
     g = Math.floor(Math.random() * 256)
     b = Math.floor(Math.random() * 256)
     result = "rgb(" + r + ", " + g + ", " + b + ")"
     return result
 }

 function reset(){
    resetButton.textContent = "New Color"
    colors = generateRandomColors(mode);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block"
            squares[i].style.backgroundColor = colors[i]
            }
        else{
            squares[i].style.display = "none"
            }
    }
    h1.style.backgroundColor = "steelblue"
    messageDisplay.textContent = ""
 }