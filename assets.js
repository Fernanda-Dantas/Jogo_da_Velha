var jogoControle = []; // recebe o controle do jogo. guarda as posições
var tabuleiroVisual = []; // controla os elementos visuais
var quemJoga = 0; // 0-jogador 1-Máquina
var verificaResultado;
var jogando = true; // indica se o jogo está acontecendo ou não
var nivel = 1;
var jogadaMaquina = 1;
var quemComeca = 1;

function maquinaJoga() {
  if(jogando) {
    var l,c;
    if(nivel==1) {
      do{
          l = Math.round(Math.random()*2);
          c = Math.round(Math.random()*2);
      } while(jogoControle[l][c]!="");
        jogoControle[l][c]="O";
    } else if(nivel==2) {

    }
    verifica = verificaVitoria();
    if (verifica != "") {
      alert(verifica + " venceu!");
      jogando = false;
    } else if (verifica = "") {
      alert("Jogo Empatado");
      jogando = false;
    }
    atualizaTabuleiro();
    quemJoga = 0; 
    
  }
}

function verificaVitoria() {
  var l,c;
  // LINHAS
  for(l = 0; l < 3; l++){
    if((jogoControle[l][0] == jogoControle[l][1])&&(jogoControle[l][1] == jogoControle[l][2])) {
      return jogoControle[l][0]; // posição do vencedor

    }
  } 

  //COLUNAS
  for(c = 0; c < 3; c++){
    if(
      (jogoControle[0][c] == jogoControle[1][c]) && (jogoControle[1][c] == jogoControle[2][c])) {
        return jogoControle[0][c]; // posição do vencedor
    }
  }

  //DIAGONAIS
  if(
    (jogoControle[0][0] == jogoControle[1][1]) && (jogoControle[1][1] == jogoControle[2][2])) {
      return jogoControle[0][0]; // posição do vencedor
  }
  if(
    (jogoControle[0][2] == jogoControle[1][1]) && (jogoControle[1][1] == jogoControle[2][0])) {
      return jogoControle[0][2]; // posição do vencedor
  }
  return ""; // indica que não houve vencedor
}


function jogar(posicao) {
  if ((jogando) && (quemJoga == 0)) {
      switch(posicao) {
        case 1:
          if(jogoControle[0][0] == "") {
            jogoControle[0][0] = "X";
            quemJoga = 1;
          }
        break;             
        case 2:
          if(jogoControle[0][1] == "") {
            jogoControle[0][1] = "X";
            quemJoga = 1;
          }
        break;          
        case 3:
          if(jogoControle[0][2] == "") {
            jogoControle[0][2] = "X";
            quemJoga = 1;
          }
        break;     
        case 4:
          if(jogoControle[1][0] == "") {
            jogoControle[1][0] = "X";
            quemJoga = 1;
          }
        break;     
        case 5:
          if(jogoControle[1][1] == "") {
            jogoControle[1][1] = "X";
            quemJoga = 1;
          }
        break;     
        case 6:
          if(jogoControle[1][2] == "") {
            jogoControle[1][2] = "X";
            quemJoga = 1;
          }
        break;            
        case 7:
          if(jogoControle[2][0] == "") {
            jogoControle[2][0] = "X";
            quemJoga = 1;
          }
        break;     
        case 8:
          if(jogoControle[2][1] == "") {
            jogoControle[2][1] = "X";
            quemJoga = 1;
          }
        break;     
        default: // Caso 9
          if(jogoControle[2][2] == "") {
            jogoControle[2][2] = "X";
            quemJoga = 1;
          }
        break;     
      }

    if (quemJoga == 1) {
        atualizaTabuleiro();
        verifica = verificaVitoria();
        if (verifica != "") {
          alert(verifica + " venceu!");
          jogando = false;
        } else if (verifica = "") {
          alert("Jogo Empatado");
          jogando = false;
        }
        maquinaJoga();
    }  
  }  
  
}


function atualizaTabuleiro() { // será chamada após uma jogada. percorre as matrizes jogo e tabuleiro
  for (var lin = 0; lin < 3; lin++) {
    for(var col = 0; col < 3; col++) {
      if(jogoControle[lin][col] == "X") {
        tabuleiroVisual[lin][col].innerHTML = "X";
        tabuleiroVisual[lin][col].style.cursor = "default";
      } else if (jogoControle[lin][col] == "O") {
        tabuleiroVisual[lin][col].innerHTML = "O";
        tabuleiroVisual[lin][col].style.cursor = "default";
      } else {
        tabuleiroVisual[lin][col].innerHTML = "";
        tabuleiroVisual[lin][col].style.cursor = "pointer";
      }

    }
  }

}


function iniciar() {
    jogando = true;
    jogadaMaquina = 1;
    jogoControle = [
        ["","",""],
        ["","",""],
        ["","",""]
    ];

    tabuleiroVisual = [ // associa os elementos visuais
        [document.getElementById("p1"), document.getElementById("p2"), document.getElementById("p3")],
        [document.getElementById("p4"), document.getElementById("p5"), document.getElementById("p6")],
        [document.getElementById("p7"), document.getElementById("p8"), document.getElementById("p9")]
    ];
    atualizaTabuleiro();
    if(quemComeca == 1) {
      quemComeca = 0;
      quemJoga = quemComeca;
      document.getElementById("div-quem-comeca").innerHTML = "Quem começa: Jogador";
    } else {
      quemComeca = 1;
      quemJoga = quemComeca;
      document.getElementById("div-quem-comeca").innerHTML = "Quem começa: Máquina";
      maquinaJoga();
    }
};

window.addEventListener("load", iniciar); // começa com a página inicia