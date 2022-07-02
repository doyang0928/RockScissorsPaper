//태그 가져오기
const $computer = document.querySelector("#computer");
const $score = document.querySelector("#score");
const $rock = document.querySelector("#rock");
const $scissors = document.querySelector("#scissors");
const $paper = document.querySelector("#paper");

//이미지 배열
let img_url = ["images/rock.png", "images/paper.png", "images/scissors.png"];
$computer.src = `${img_url[0]}`;

let computerChoice = 0;

function changeComputerHand(){
    computerChoice++;
    if(computerChoice > 2) computerChoice = 0;
    $computer.src = `${img_url[computerChoice]}`;
   // console.log(1);
}
let computerInterval = setInterval(changeComputerHand, 50);

let clickable = true;
let score = 0;
function clickButton(event){
    if(clickable){
        clickable = false;
        clearInterval(computerInterval);
      // console.log(event.target.innerText);

      const myChoice = event.target.innerText;
      let resultMsg;

      if(myChoice === 'scissors'){
        if(computerChoice===0)resultMsg = "Defeat"
        else if(computerChoice===1)resultMsg = "Win";
        else resultMsg = "Draw";


      }else if(myChoice === 'rock'){
        if(computerChoice===1)resultMsg = "Defeat"
        else if(computerChoice===2)resultMsg = "Win";
        else resultMsg = "Win";


      }else if(myChoice === 'paper'){
        if(computerChoice===0)resultMsg = "Win"
        else if(computerChoice===1)resultMsg = "Draw";
        else resultMsg = "Defeat";
      }
      if(resultMsg === 'Win') score ++;
      else if(resultMsg === 'Defeat') score --;
      $score.innerText = `${resultMsg}, Score:${score}points`;
      setTimeout(()=> {
        clickable = true;
        computerInterval = setInterval(changeComputerHand, 50);
      },2000);
    }
}

$rock.addEventListener("click", clickButton);
$paper.addEventListener("click", clickButton);
$scissors.addEventListener("click", clickButton);
