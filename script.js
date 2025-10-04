const perguntas = [
  {
    pergunta: "Qual é o principal objetivo do Desenvolvimento Ágil?",
    respostas: [
      { texto: "Criar documentação extensa antes de começar", correct: false},
      { texto: "Entregar o produto completo apenas no final", correto: true },
      { texto: "Trabalhar em equipe por etapas curtas, entregando pequenas partes funcionais", correto: false },
    ]
  },
  {
    pergunta: "De acordo com o Manifesto Ágil, o que é mais importante do que seguir regras engessadas?",
    respostas: [
      { texto: "Pessoas e trabalho em equipe", correto: true },
      { texto: "Documentação detalhada", correto: false },
      { texto: "Contratos formais", correto: false },
    ]
  },
  {
    pergunta: "No Scrum, como são chamadas as rodadas curtas de trabalho (normalmente de 2 a 4 semanas)?",
    respostas: [
      { texto: "Kanbans", correto: false},
      { texto: "Sprints", correto: true },
      { texto: "Backlogs", correto: false },
    ]
  },
  {
    pergunta: "No Scrum, quem é responsável por garantir que as regras sejam seguidas e ajudar a resolver problemas?",
    respostas: [
      { texto: "Product Owner", correto: false},
      { texto: "Scrum Master", correto: true },
      { texto: "Time de Desenvolvimento", correto: false },
    ]
  },
  {
    pergunta: "No Kanban, qual é a regra importante sobre o número de tarefas em andamento?",
    respostas: [
      { texto: "Começar o máximo possível de tarefas ao mesmo tempo", correto: false},
      { texto: "Não começar coisas demais ao mesmo tempo para não travar", correto: true },
      { texto: "Deixar todas as tarefas pendentes até o final", correto: false },
    ]
  },
  {
    pergunta: "No Scrum, qual é o papel do Product Owner?",
    respostas: [
      { texto: "Garantir que as regras do Scrum sejam seguidas", correto: false},
      { texto: "Desenvolver as funcionalidades do produto", correto: false },
      { texto: "Decidir o que é mais importante fazer, definindo a estratégia", correto: true },
    ]
  },
  {
    pergunta: "O que é o Product Backlog no Scrum?",
    respostas: [
      { texto: "A lista do que será feito apenas na sprint atual", correto: false},
      { texto: "Uma lista com tudo que queremos no projeto", correto: true },
      { texto: "A parte do produto que fica pronta no final", correto: false },
    ]
  },
  {
    pergunta: "No Extreme Programming (XP), qual NÃO é um dos valores mencionados?",
    respostas: [
      { texto: "Comunicação", correto: false},
      { texto: "Simplicidade", correto: false},
      { texto: "Burocracia", correto: true},
    ]
  },
  {
    pergunta: " No Kanban, como as tarefas são normalmente organizadas visualmente?",
    respostas: [
      { texto: "Em uma lista linear sequencial", correto: false},
      { texto: "Em um quadro dividido em colunas como 'A fazer', 'Em andamento' e 'Feito'", correto: true},
      { texto: "Em um documento de texto com datas", correto: false},
    ]
  },
  {
    pergunta: "Qual é a principal vantagem de usar Metodologias Ágeis mencionada nos slides para projetos como apps e jogos?",
    respostas: [
      { texto: "Evitar qualquer tipo de comunicação com o cliente", correto: false},
      { texto: "Seguir rigidamente o plano inicial sem ajustes", correto: true},
      { texto: "Fazer tudo fluir mais rápido e com menos estresse através de objetivos claros e ajustes rápidos", correto: false },
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
