const button = document.querySelectorAll(".btn");

const nextSequence = () =>{
    let randomColors =["red","blue","green","yellow"];
    const randomNumber= Math.floor(Math.random()*3);
    const  randomChosenColour = buttonColours[randomNumber];
    
    
}

const gamePattern = (gameColor) => {


}

button.forEach((btn) => {
    btn.addEventListener("click",() => {
        console.log("btn clicked");
        const gameColor= btn.getAttribute("id");
        console.log();
        gamePattern(gameColor);
    })

});