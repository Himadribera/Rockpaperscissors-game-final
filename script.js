let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses:0,
    ties:0
  };
  // if(!score){
  //   wins: 0,
  //   losses:0,
  //   ties:0
  // };
  // }
 updateScoreElement();

  function playgame(playermove) {
    const computerMove = pickComputerMove();
    let result = '';
    if (playermove === "rock") {
      if (computerMove === "rock") {
        result = 'Tie';
      } else if (computerMove === "paper") {
        result ='Lose';
      } else if (computerMove === "scissors") {
        result='Win';
      }
    } 
    
    else if (playermove === "paper") {
      if (computerMove === "paper") {
        result = 'Tie';
      } else if (computerMove === "scissors") {
        result ='Lose';
      } else if (computerMove === "rock") {
        result='Win';
      }
    }
    
    else if (playermove === "scissors") {
        if (computerMove === "scissors") {
             result = 'Tie';
          } else if (computerMove === "rock") {
            result ='Lose';
          } else if (computerMove === "paper") {
            result='Win';
          }
    }
    if (result=== 'Win'){
      score.wins++;
    }
    else if(result==='Lose'){
      score.losses++;
    }
    else if(result==='Tie'){
      score.ties++;
    }

    localStorage.setItem('score',JSON.stringify(score));

    updateScoreElement();

    document.querySelector('.js-result').innerHTML = `You ${result}.`;

    document.querySelector('.js-moves').innerHTML =`You <img src="${playermove}-emoji.png" class="move-img"> vs <img src="${computerMove}-emoji.png" class="move-img"> Computer`;

    alert(`You picked ${playermove}.Computer picked ${computerMove}.You ${result}.
Score : Win : ${score.wins} Loss : ${score.losses} Tie : ${score.ties}`);
  }

  function updateScoreElement()
    {
      document.querySelector('.js-score')
      .innerHTML = `Win : ${score.wins} Loss : ${score.losses} Tie : ${score.ties}`;
    }

    function pickComputerMove() {
        const randomNum= Math.random();
        let computerMove='';
      if (0 <= randomNum && randomNum < 1 / 3) {
        computerMove = "rock";
      } else if (1 / 3 <= randomNum && randomNum < 2 / 3) {
        computerMove = "paper";
      } else if (2 / 3 <= randomNum && randomNum < 1) {
        computerMove = "scissors";
      }
      return computerMove;
    }