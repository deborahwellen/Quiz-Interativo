const perguntas = [
  {
    pergunta: "Quanto é 2 + 5?",
    respostas: [
      { texto: "1", correto: false },
      { texto: "7", correto: true },
      { texto: "8", correto: false }
    ]
  },
  {
    pergunta: "Quanto é 2 + 2?",
    respostas: [
      { texto: "3", correto: false },
      { texto: "4", correto: true },
      { texto: "5", correto: false }
    ]
  },
  {
    pergunta: "Quem pintou a Mona Lisa?",
    respostas: [
      { texto: "Leonardo da Vinci", correto: true },
      { texto: "Deborah", correto: false },
      { texto: "Van Gogh", correto: false }
    ]
  }
];

let conteinerPergunta = document.getElementById("conteinerPergunta");
let botoesResp = document.getElementById("botoesResp").getElementsByTagName("button");
let resposta = document.getElementById("resposta");
let proximo = document.getElementById("proximo");

let pontuacao = 0;
let pergunta_atual = 0;

conteinerPergunta.innerText = perguntas[pergunta_atual].pergunta;
for (let i = 0; i < botoesResp.length; i++) {
  if (i < perguntas[pergunta_atual].respostas.length) {
    botoesResp[i].innerText = perguntas[pergunta_atual].respostas[i].texto;
    botoesResp[i].onclick = function () {
      if (perguntas[pergunta_atual].respostas[i].correto) {
        resposta.innerText = "Você acertou!!";
        pontuacao++;
      } else {
        resposta.innerText = "Você errou!";
      }
      proximo.style.display = "block";
    };
  } else {
    botoesResp[i].style.display = "none";
  }
}

proximo.style.display = "none";

proximo.onclick = function () {
  pergunta_atual++;
  resposta.innerText = "";
  proximo.style.display = "none";

  if (pergunta_atual < perguntas.length) {
    conteinerPergunta.innerText = perguntas[pergunta_atual].pergunta;

    for (let i = 0; i < botoesResp.length; i++) {
      if (i < perguntas[pergunta_atual].respostas.length) {
        botoesResp[i].style.display = "inline-block";
        botoesResp[i].innerText = perguntas[pergunta_atual].respostas[i].texto;

        botoesResp[i].onclick = function () {
          if (perguntas[pergunta_atual].respostas[i].correto) {
            resposta.innerText = "Você acertou!";
            pontuacao++;
          } else {
            resposta.innerText = "Você errou!";
          }
          proximo.style.display = "block";
        };
      } else {
        botoesResp[i].style.display = "none";
      }
    }
  } else {
    conteinerPergunta.innerText = "Fim do Quiz!";
    resposta.innerText = `Você acertou ${pontuacao} de ${perguntas.length} perguntas!!`;
    for (let i = 0; i < botoesResp.length; i++) {
      botoesResp[i].style.display = "none";
    }
    proximo.style.display = "none";
  }
};