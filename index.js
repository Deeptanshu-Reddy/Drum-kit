var arr = document.querySelectorAll(".drum");
for(var i = 0;i< arr.length;i++){
    arr[i].addEventListener("click",function(){
        
       playAudio(this.innerHTML);
       buttonAnimation(this.innerHTML);

    });
}

document.addEventListener("keydown",function(event){
    playAudio(event.key);
    buttonAnimation(event.key);
});

function playAudio(buttonInnerHtml){
    switch(buttonInnerHtml){

        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var kick_bass = new Audio("sounds/kick-bass.mp3");
            kick_bass.play();
            break;
        case "l":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        default: console.log(buttonInnerHtml);
        
       }
}


function buttonAnimation(key){

    var active_button = document.querySelector("." + key);
    active_button.classList.add("pressed");
    setTimeout(function(){
        active_button.classList.remove("pressed");
    },100);
}






// var audio = new Audio("sounds/tom-1.mp3");
// audio.play();
