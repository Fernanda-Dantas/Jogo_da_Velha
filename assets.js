var jogoControle = []; // recebe o controle do jogo. guarda as posições
var tabuleiroVisual = []; // controla os elementos visuais
var quemJoga = 0; // 0-jogador 1-Máquina
var verificaResultado;
var jogando = true; // indica se o jogo está acontecendo ou não
var nivel = 1;
var jogadaMaquina = 1;
var quemComeca = 1;

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
      atualizaTabuleiro();
  }
}


function atualizaTabuleiro() { // será chamada após uma jogada. percorre as matrizes jogo e tabuleiro
  for (var lin = 0; lin < 3; lin++) {
    for(var col = 0; col < 3; col++) {
      if(jogoControle[lin][col] == "X") {
        tabuleiroVisual[lin][col].innerHTML = "X";
        tabuleiroVisual[lin][col].style.cursor = "default";
      } else if (jogoControle[lin][col] == "O") {
        tabuleiroVisual[lin][col].innerHTML = "0";
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
    jogo = [
        ["","",""],
        ["","",""],
        ["","",""]
    ];

    tabuleiroVisual = [ // associa os elementos visuais
        [document.getElementById("p1"), document.getElementById("p2"), document.getElementById("p3")],
        [document.getElementById("p4"), document.getElementById("p5"), document.getElementById("p6")],
        [document.getElementById("p7"), document.getElementById("p8"), document.getElementById("p9")]
    ];
};

window.addEventListener("load", iniciar); // começa com a página inicia