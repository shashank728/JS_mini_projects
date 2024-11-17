let randomNumber = parseInt((Math.random()*10)+1);
console.log(randomNumber)
const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessfield");

const guessSlot = document.querySelector(".guesses");
const remainingGuess = document.querySelector(".lastresult");

const loworhi = document.querySelector(".loworhi");
const startOver = document.querySelector(".resultparas");

const p = document.createElement("p");

let preGuess = [];
let numguess = 1;

let playgame = true;

if(playgame)
{
    submit.addEventListener("click",function (e){
        e.preventDefault();
        const guess = parseInt(userInput.value);

        validateguess(guess);
    })
}

function validateguess(guess){
    if(isNaN(guess))
    {
        alert("please enter a valid number !");
    }
    else if(guess<1)
    {
        alert("please enter a number more than one ");
    }
    else if(guess>100)
    {
        alert("please enter a number small than 100 ");
    }
    else
    {
        preGuess.push(guess)
        if(numguess === 11)
        {
            displayguess(guess)
            displayMessage(`Game Over. Random number was ${randomNumber}`)
            endgame()
        }
        else
        {
            displayguess(guess)
            checkguess(guess)
        }
    }

}

function checkguess(guess){

    if(guess === randomNumber)
    {
        displayMessage(`Wow you win the game congratulation .`);
        endgame()
    }
    else if(guess < randomNumber)
    {
        displayMessage(`you guess number is too low `);
    }
    else if(guess > randomNumber)
    {
        displayMessage(`you guess number is too high`);
    }

}

function displayguess(guess){
    userInput.value = ''
    guessSlot.innerHTML += `${guess} `
    numguess++;
    remainingGuess.innerHTML = `${11 - numguess}`

    
}


function displayMessage(message){
    loworhi.innerHTML = `<h2>${message}</h2>`;
}

function endgame(){
    userInput.value = ''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newgame"> Start New Game </h2>`
    startOver.appendChild(p)
    playgame = false

    newgame()
}



function newgame()
{
    const newGameButton = document.querySelector('#newgame');
    newGameButton.addEventListener('click' ,function(e){
        randomNumber = parseInt((Math.random()*10)+1);
        preGuess = []
        numguess = 1
        guessSlot.innerHTML = ''
        remainingGuess.innerHTML = `${11 - numguess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)

        playgame = true;
        
    })
}