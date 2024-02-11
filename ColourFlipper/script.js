const colors = ["violet", "orange", "red", "#E838A6","brown", "rgba(50,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click",function(){
    const randomNumber = getRandomNumber();
    console.log(randomNumber);

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
} );

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}

