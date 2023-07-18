const colors = ["green", "red", "rgba(133,122,200)", "#F15025", "rgba(95,168,214,1)", "rgba(201,95,214,1)", "yellow", "blue", "#ff0034", "rgba(238,174,202,1"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
    // get random number between 0 - x 
    const randomNumber = getRandomNumber();
    console.log(randomNumber);

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}