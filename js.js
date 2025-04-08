perguntas = [
  {
    pergunta: "1-) Qual é o nome completo do protagonista de GTA San Andreas?",
    respostas: [
      { opcao: "Carl Jefferson", correto: false },
      { opcao: "CJ Johnson", correto: false },
      { opcao: "Carl Johnson", correto: true },
      { opcao: "Chris Johnson", correto: false },
    ],
  },
  {
    pergunta: "2-) Qual cidade fictícia de GTA San Andreas representa Los Angeles?",
    respostas: [
      { opcao: "Vice City", correto: false },
      { opcao: "Las Venturas", correto: false },
      { opcao: "Liberty City", correto: false },
      { opcao: "Los Santos", correto: true },
    ],
  },
  {
    pergunta: "3-) Qual é o nome do irmão de CJ que lidera os Grove Street Families?",
    respostas: [
      { opcao: "Big Smoke", correto: false },
      { opcao: "Ryder", correto: false },
      { opcao: "Sweet", correto: true },
      { opcao: "Tenpenny", correto: false },
    ],
  },
  {
    pergunta: "4-) Qual personagem famoso trai CJ durante a história?",
    respostas: [
      { opcao: "Sweet", correto: false },
      { opcao: "Big Smoke", correto: true },
      { opcao: "Cesar", correto: false },
      { opcao: "Kendl", correto: false },
    ],
  },
  {
    pergunta: "5-) Qual é o nome da gangue rival dos Grove Street Families?",
    respostas: [
      { opcao: "The Ballas", correto: true },
      { opcao: "Vagos", correto: false },
      { opcao: "Triads", correto: false },
      { opcao: "Da Nang Boys", correto: false },
    ],
  },
  {
    pergunta: "6-) Qual dessas atividades é possível fazer em GTA San Andreas?",
    respostas: [
      { opcao: "Plantar árvores", correto: false },
      { opcao: "Trabalhar como policial", correto: false },
      { opcao: "Malhar na academia", correto: true },
      { opcao: "Jogar basquete de verdade", correto: false },
    ],
  },
  {
    pergunta: "7-) Qual rádio fictícia toca hip hop e rap em GTA San Andreas?",
    respostas: [
      { opcao: "K-DST", correto: false },
      { opcao: "Bounce FM", correto: false },
      { opcao: "Radio Los Santos", correto: true },
      { opcao: "K-Rose", correto: false },
    ],
  },
  {
    pergunta: "8-) Qual é o nome da cidade inspirada em Las Vegas?",
    respostas: [
      { opcao: "Los Santos", correto: false },
      { opcao: "Las Venturas", correto: true },
      { opcao: "San Fierro", correto: false },
      { opcao: "Angel Pine", correto: false },
    ],
  },
  {
    pergunta: "9-) Qual profissão CJ pode exercer para ganhar dinheiro honestamente?",
    respostas: [
      { opcao: "Carteiro", correto: false },
      { opcao: "Caminhoneiro", correto: true },
      { opcao: "Arquiteto", correto: false },
      { opcao: "Bombeiro", correto: false },
    ],
  },
  {
    pergunta: "10-) Qual dessas armas é desbloqueada após atingir 100% de progresso no jogo?",
    respostas: [
      { opcao: "RPG", correto: false },
      { opcao: "AK-47", correto: false },
      { opcao: "Granadas", correto: false },
      { opcao: "Rhino (tanque de guerra)", correto: true },
    ],
  },
];

const perguntaElemento = document.querySelector(".pergunta");
const respostasElemento = document.querySelector(".respostas");
const progressoElemento = document.querySelector(".progresso");
const textoFinal = document.querySelector(".fim span");
const conteudo = document.querySelector(".conteudo");
const conteudoFinal = document.querySelector(".fim");


let indiceAtual = 0;
let acertos = 0;

function carregarPergunta() 
{
  progressoElemento.innerHTML = `${indiceAtual + 1}/${perguntas.length}`;
  const perguntaAtual = perguntas[indiceAtual];
  perguntaElemento.innerHTML = perguntaAtual.pergunta;
  respostasElemento.innerHTML = "";

  for (let i = 0; i < perguntaAtual.respostas.length; i++) 
    {
    const resposta = perguntaAtual.respostas[i];
    const botao = document.createElement("button");
    botao.classList.add("botao-resposta");
    botao.innerText = resposta.opcao;
    botao.onclick = function () {
      if (resposta.correto) 
      {
        acertos++;
      }

      indiceAtual++;

      if (indiceAtual < perguntas.length) 
      {
        carregarPergunta();
      } else {
        finalizarJogo();
      }
    };
    respostasElemento.appendChild(botao);
  }
}


function finalizarJogo() 
{
  textoFinal.innerHTML = `Você acertou ${acertos} de ${perguntas.length}`;
  conteudo.style.display = "none";
  conteudoFinal.style.display = "flex";
}


function recomecarJogo() 
{
  indiceAtual = 0;
  acertos = 0;
  conteudoFinal.style.display = "none";
  conteudo.style.display = "flex";
  carregarPergunta();
}


const botaoRecomecar = document.createElement("button");
botaoRecomecar.innerText = "Recomeçar";
botaoRecomecar.classList.add("botao-resposta");
botaoRecomecar.onclick = recomecarJogo;
conteudoFinal.appendChild(botaoRecomecar);


carregarPergunta();
