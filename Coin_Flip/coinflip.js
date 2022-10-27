let flipButton = document.querySelector('button');

flipButton.addEventListener("click", clickItToFlipIt);

function clickItToFlipIt(){
    console.log("Click it to Flip it ")

    let random = Math.random();
    console.log(random)

    if(random < 0.5){
        document.querySelector('.result').innerHTML = `<div class="side">
        <img src="./head.jpg" alt="The coin toss has a new result">
        <h2 class="">It is a Head</h2>
        </div>
        `
    }else{
        document.querySelector('.result').innerHTML = `<div class="side">
        <img src="./tail.jpg" alt="The coin toss has a new result">
        <h2 class="">It is a Tail</h2>
        </div>
        `
        console.log("It is a tail")
    }
}