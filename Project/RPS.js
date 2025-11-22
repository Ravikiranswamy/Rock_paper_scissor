let compchoice;
let humanchoice;
let humanscore=0;
let compscore=0;


function play(){
    
    function getComputerChoice(){
        compchoice=Math.random();
        console.log(compchoice)
        if(compchoice>=0 && compchoice<1/3){
            compchoice='rock';
        }else if(compchoice>=1/3 && compchoice<2/3){
            compchoice='paper';
        }else if(compchoice>=2/3 && compchoice<1){
            compchoice='scissor';
        }
        console.log(compchoice)
    }
    function getHumanChoice(){
        humanchoice=prompt("Choose between Rock Paper and Scissor");
        
        if(humanchoice.toLowerCase()==='rock'||humanchoice.toLowerCase()==='paper'||humanchoice.toLowerCase()==='scissor'){
            playround(compchoice, humanchoice.toLowerCase());
        }else{
            alert("Wrong choice!")
            getHumanChoice();
        }
    }
    
    function playround(compchoice, humanchoice) {
        if(compchoice === humanchoice) {
            alert(`Computer chose ${compchoice} its an draw`);
            humanscore+=0.5;
            compscore+=0.5;
        } else if(
            (compchoice === 'rock' && humanchoice === 'paper') || 
            (compchoice === 'paper' && humanchoice === 'scissor') || 
            (compchoice === 'scissor' && humanchoice === 'rock')
        ) {
            alert(`Computer chose ${compchoice} you win`);
            humanscore+=1;
        } else {
            alert(`Computer chose ${compchoice}, you lose.`);
            compscore+=1;
        }
    }
    getComputerChoice();
    getHumanChoice();
    document.getElementById('displayChoice').textContent = `Computer score: ${compscore}`;
    document.getElementById('displayChoicee').textContent = `Your score: ${humanscore}`;
   
}

function reset(){
    alert('Resetting');
    
    let humanscore=0;
    let compscore=0;
    document.getElementById('displayChoice').textContent = `Computer score: ${compscore}`;
    document.getElementById('displayChoicee').textContent = `Your score: ${humanscore}`;
}
