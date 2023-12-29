document.getElementById("roll").addEventListener("click",rollDice)
   
    function rollDice(){
            const dice1 = document.getElementById("member-1");
            const dice2 = document.getElementById("member-2");
            const dice3 = document.getElementById("member-3");
            const winnerDiv = document.getElementById("winner");

            const score1 = Math.floor(Math.random() * 6) + 1;
            const score2 = Math.floor(Math.random() * 6) + 1;
            const score3 = Math.floor(Math.random() * 6) + 1;

            dice1.textContent = score1;
            dice2.textContent = score2;
            dice3.textContent = score3;

            const maxScore=Math.max(score1,score2,score3);
            const minScore = Math.min(score1, score2, score3);
            const secondHighestScore = score1 + score2 + score3 - maxScore - minScore;
            
            if (score1 === score2 && score2 === score3) {
                winnerDiv.textContent = "It's a draw!";
                winnerDiv.style.fontSize="30px";
                winnerDiv.style.color = "blue";
                dice1.style.backgroundColor="blue";
                dice2.style.backgroundColor="blue";
                dice3.style.backgroundColor="blue";
            }
            
            
            else{
                if(maxScore===score1&& score1===score2){
                    dice1.style.backgroundColor="blue";
                    dice2.style.backgroundColor="blue";
                    winnerDiv.textContent = "It's Draw";
                    winnerDiv.style.fontSize="30px";
                    winnerDiv.style.color = "blue";
                }
                else if(maxScore===score1){
                    
                    dice1.style.backgroundColor="green";
                    winnerDiv.textContent = "Member A Wins!";
                    winnerDiv.style.fontSize="30px";
                    winnerDiv.style.color = "green";
                }
                else if(score1==score2){
                    dice1.style.backgroundColor="blue";
                    dice2.style.backgroundColor="blue";
                }else if(maxScore===score1  && score1===score3){
                    dice1.style.backgroundColor="blue";
                    dice3.style.backgroundColor="blue";
                    winnerDiv.textContent = "It's Draw!";
                    winnerDiv.style.fontSize="30px";
                    winnerDiv.style.color = "blue";
                }
                else if(score1==score3){
                    dice1.style.backgroundColor="blue";
                    dice3.style.backgroundColor="blue";
                   
                }
                else{
                    dice1.style.backgroundColor="red";
                }


                if(maxScore===score2 && score2===score1){
                    dice1.style.backgroundColor="blue";
                    dice2.style.backgroundColor="blue";
                    winnerDiv.textContent = "It's Draw";
                    winnerDiv.style.fontSize="30px";
                    winnerDiv.style.color = "blue";
                   
                }else if(maxScore===score2){
                    dice2.style.backgroundColor="green";
                    winnerDiv.textContent = "Member B Wins!";
                    winnerDiv.style.fontSize="30px";
                    winnerDiv.style.color = "green";
                }
                else if(score2==score1){
                    dice2.style.backgroundColor="blue";
                    dice1.style.backgroundColor="blue";
                   
                }else if(maxScore===score2  && score2===score3){
                    dice2.style.backgroundColor="blue";
                    dice3.style.backgroundColor="blue";
                    winnerDiv.textContent = "It's Draw";
                    winnerDiv.style.fontSize="30px";
                    winnerDiv.style.color = "blue";
                }else if(score2==score3){
                    dice2.style.backgroundColor="blue";
                    dice3.style.backgroundColor="blue";
                   
                }else{
                    dice2.style.backgroundColor="red";
                }
                
                if(maxScore===score3  && score3===score1){
                    dice3.style.backgroundColor="blue";
                    dice1.style.backgroundColor="blue";
                    winnerDiv.textContent = "It's Draw";
                    winnerDiv.style.fontSize="30px";
                    winnerDiv.style.color = "blue";
                }
                 else if(maxScore===score3  && score3===score2){
                    dice3.style.backgroundColor="blue";
                    dice2.style.backgroundColor="blue";
                    winnerDiv.textContent = "It's Draw";
                    winnerDiv.style.fontSize="30px";
                    winnerDiv.style.color = "blue";
                }
                 else if(maxScore===score3){
                    dice3.style.backgroundColor="green";
                    winnerDiv.textContent = "Member C Wins!";
                    winnerDiv.style.fontSize="30px";
                    winnerDiv.style.color = "green";
                }
                else if(score3==score1){
                    dice3.style.backgroundColor="blue";
                    dice1.style.backgroundColor="blue";
                   
                }
               
                else if(score3==score2){
                    dice2.style.backgroundColor="blue";
                    dice3.style.backgroundColor="blue";
                   
                }
                else{
                    dice3.style.backgroundColor="red";
                }

                if (score1 !== maxScore && score1 !== minScore && score1 === secondHighestScore) {
                    dice1.style.backgroundColor = "yellow";
                } else if (score2 !== maxScore && score2 !== minScore && score2 === secondHighestScore) {
                    dice2.style.backgroundColor = "yellow";
                } else if (score3 !== maxScore && score3 !== minScore && score3 === secondHighestScore) {
                    dice3.style.backgroundColor = "yellow";
                }   

            }
    }