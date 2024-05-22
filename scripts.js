let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg1 = document.querySelector("#msg");
const userscorepara=document.querySelector("#your-score");
const compcorepara=document.querySelector("#computer-score");
const gerncomputerchoice=()=>{
    const options=["rock","paper","scissors"];
    const randomIdx = Math.floor(Math.random()*3);
    return options[randomIdx];
}
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin)
    {
        userscore++;
        userscorepara.innerText=userscore;
        msg1.innerText="You Win!!";
        msg1.style.backgroundColor = "Green";
    }
    else{
        compscore++;
        compcorepara.innerText=compscore;
        msg1.innerText="You lose!";
        msg1.style.backgroundColor = "Red";
    }
}
const playGame =(userChoice) =>{
    const compChoice = gerncomputerchoice();
    if(userChoice===compChoice)
    {
        msg1.innerText="Game Draw Play again!";
        msg1.style.backgroundColor = "Blue";
    }
    else{
        let userWin = true;
        if(userChoice==="rock")
        {
            userWin=compChoice==="paper"?false:true;
        }
        else if(userChoice==="paper")
        {
            userWin=compChoice==="scissor"?false:true;
        }
        else{
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
