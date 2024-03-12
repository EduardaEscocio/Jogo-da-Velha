let x = document.querySelector('.x');
let o = document.querySelector('.o');
let boxes = document.querySelectorAll('.box')
let buttons = document.querySelectorAll('#buttons-container button');
let messageContainer = document.querySelector("#msg");
let messageText = document.querySelector("#msg p");
let secondPlayer;

//contador de jogadas
let player1 = 0;
let player2 = 0;

//adicionando o evento de click aos boxes
for(let i = 0; i < boxes.length; i++){
    // quando alguem clica na caixa
    boxes[i].addEventListener("click", function() {
      //  checarQuemGanhou()
      let el = checkEl(player1, player2);
        

        if((this.childNodes.length == 1) ){
        
            let cloneEl = el.cloneNode(true);

                this.appendChild(cloneEl);
    
                //computar jogada
                if(player1 == player2){
                    player1++;
                } else{
                    player2++;
                }
                checarQuemGanhou()

                }  
                
    })
}  
// 2 players ou ia
  for(let i = 0; i < buttons.length; i++){
  buttons[i].addEventListener("click", function(){
    secondPlayer = this.getAttribute("id");

    for (let j = 0; j < buttons.length; j++){
        buttons[j].style.display = 'none';
    }   

    setTimeout(function(){
      let container = document.querySelector("#container")
      container.classList.remove('hide')
    }, 3000)
})
}

    
function checkEl(player1, player2){
    if(player1 == player2){
        //x
        el = x;
    } else{
        //o
        el = o;
    }   
    return el         
    
}

function checarQuemGanhou(){
    this.appendChild(b1)
    let b1 = document.getElementById("block1");
    let b2 = document.getElementById("block2");
    let b3 = document.getElementById("block3");
    let b4 = document.getElementById("block4");
    let b5 = document.getElementById("block5");
    let b6 = document.getElementById("block6");
    let b7 = document.getElementById("block7");
    let b8 = document.getElementById("block8");
    let b9 = document.getElementById("block9");
    
    //horizontal
    if(b1.childNodes.length > 0 && b2.childNodes.length > 0 && b3.childNodes.length > 0){
        let b1Child = b1.childNodes[0];
        let b2Child = b2.childNodes[0];
        let b3Child = b3.childNodes[0];
        console.log(b1.children[0].innerHTML)
        console.log("a")
        console.log(b1Child)
        if(b1Child == 'X' && b2Child == 'X' && b3Child == 'X'){
            console.log('X venceu');
            declararVencedor('X')
        } else if(b1Child == 'O' && b2Child == 'O' && b3Child == 'O'){
            console.log('o venceu');
            declararVencedor('O');
        }
    }

    
    if (b4.childNodes.length > 0 && 
        b5.childNodes.length >  0 
        && b6.childNodes.length > 0){ 
            let b4Child = b4.childNodes[0].className;
            let b5Child = b5.childNodes[0].className;
            let b6Child = b6.childNodes[0].className;

    if(b4Child == 'X' && b5Child == 'X' && b6Child == 'X'){
        console.log('X venceu');
        declararVencedor('X')
    } else if(b4Child == 'o' && b5Child == 'o' && b6Child == 'o'){
    console.log('o venceu');
    declararVencedor('o')
    }
}

if(b7.childNodes.length > 0 && 
    b8.childNodes.length >  0 
    && b9.childNodes.length > 0){ 
    let b7Child = b7.childNodes[0].className;
    let b8Child = b8.childNodes[0].className;
    let b9Child = b9.childNodes[0].className;

    if(b7Child == 'X' && b8Child == 'X' && b9Child == 'X'){
        console.log('X venceu');
        declararVencedor('X')
    } else if(b7Child == 'o' && b8Child == 'o' && b9Child == 'o'){
    console.log('o venceu');
    declararVencedor('o')
    }

}
//vertical
if (b1.childNodes.length > 0 && 
    b4.childNodes.length >  0 
    && b7.childNodes.length > 0){ 
    let b1Child = b1.childNodes[0].className;
    let b4Child = b4.childNodes[0].className;
    let b7Child = b7.childNodes[0].className;

    if(b1Child == 'X' && b4Child == 'X' && b7Child == 'X'){
        console.log('X venceu');
        declararVencedor('X')
    } else if(b1Child == 'o' && b4Child == 'o' && b7Child == 'o'){
    console.log('o venceu');
    declararVencedor('o')
    }
}
if (b2.childNodes.length > 0 && 
    b5.childNodes.length >  0 
    && b8.childNodes.length > 0){ 
    let b2Child = b2.childNodes[0].className;
    let b5Child = b5.childNodes[0].className;
    let b8Child = b8.childNodes[0].className;

    if(b2Child == 'X' && b5Child == 'X' && b8Child == 'X'){
        console.log('X venceu');
        declararVencedor('X')
    } else if(b2Child == 'o' && b5Child == 'o' && b8Child == 'o'){
    console.log('o venceu');
    declararVencedor('o')
    }
}
if (b3.childNodes.length > 0 && 
    b6.childNodes.length >  0 
    && b9.childNodes.length > 0){ 
    let b3Child = b3.childNodes[0].className;
    let b6Child = b6.childNodes[0].className;
    let b9Child = b9.childNodes[0].className;

    if(b3Child == 'X' && b6Child == 'X' && b9Child == 'X'){
        console.log('X venceu');
        declararVencedor('X')
    } else if(b3Child == 'o' && b6Child == 'o' && b9Child == 'o'){
    console.log('o venceu');
    declararVencedor('o')
    }
}
//diagonal
if (b1.childNodes.length > 0 && 
    b5.childNodes.length >  0 
    && b9.childNodes.length > 0){ 
    let b1Child = b1.childNodes[0].className;
    let b5Child = b5.childNodes[0].className;
    let b9Child = b9.childNodes[0].className;

    if(b1Child == 'X' && b5Child == 'X' && b9Child == 'X'){
        console.log('X venceu');
        declararVencedor('X')
    } else if(b1Child == 'o' && b5Child == 'o' && b9Child == 'o'){
            console.log('o venceu');
            declararVencedor('o')
    }
}
if (b3.childNodes.length > 0 && 
    b5.childNodes.length >  0 
    && b7.childNodes.length > 0){ 
    let b3Child = b3.childNodes[0].className;
    let b5Child = b5.childNodes[0].className;
    let b7Child = b7.childNodes[0].className;

    if(b3Child == 'X' && b5Child == 'X' && b7Child == 'X'){
        console.log('X venceu');
        declararVencedor('X')
    } else if(b3Child == 'o' && b5Child == 'o' && b7Child == 'o'){
    console.log('o venceu');
    declararVencedor('o')
    }
}
//deu velha
let counter = 0;
for(let i = 0; i < boxes.length; i++){
    if(boxes[i].childNodes[0] !=undefined){
        counter++
    }
}

if(counter === 9){
    console.log('deu velha')
}

}  
  function declararVencedor(vencedor){
  let scoreboardX = document.querySelector("#scoreboard-1")
  let scoreboardY = document.querySelector("#scoreboard-2")
  let msg = "";

  if(vencedor === 'X'){
      console.log('X venceu')

      scoreboardX.textContent = parseInt(scoreboardX.textContent) + 1;
     // msg = "O jogador 1 venceu!";
  } else if(vencedor === 'o'){
      console.log('x venceu')

      scoreboardY.textContent = parseInt(scoreboardY.textContent) + 1; 
      msg = "O jogador 2 venceu!";

  } else{
      msg = "Deu velha";
  } 

  //EXIBE MSG
  messageText.innerHTML = msg;
  messageContainer.classList.remove("hide");

  setTimeout(function(){
      messageContainer.classList.add("hide");
  }, 3000); 

  player1 = 0;
  player2 = 0;

  let boxesToRemove = document.querySelectorAll(".box div")

  for (let i = 0; i < boxesToRemove.length; i++) {
      boxesToRemove[i].parentNode.removeChild(boxesToRemove[i]);
  }


}
