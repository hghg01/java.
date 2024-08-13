const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');

const perguntas = [

    {
        enunciado: "No âmbito social, sua vó faleceu e não deixou testamento pronto. O que você faz? ",
        alternativas: [{
            texto: "Furta tudo que há de valor e foge com toda a herança para si mesmo. Sua família toda morre de miséria, mas você se casa e cria uma nova família.",
            afirmacao: "Afirmação 1"
        },
        {
            texto: "Propõe uma divisão igualitária de todos os bens entre sua família. Mas fica com quase nada da herança e sua família te odeia.",
            afirmacao: "Afirmação 2"
        },]
    },

    {
        enunciado: "No âmbito ambiental, você está em Colombo e vê uma queimada. O que você faz? ",
        alternativas: [{
            texto: "Descarta a bituca do seu cigarro naqueimada, aumentando-a. Mas o cheiro dafumaca te causa ânsia e você nunca maisconsegue fumar, o que evita um câncer depulmão.",
            afirmacao: "Afirmação 3"
        },
        {
            texto: "Liga pra instituição de proteção ao meioambiente do município. Mas eles acham que foi você quem aumentou a queimada porque você estava com um cigarro namão.",
            afirmacao: "Afirmação 4"
        },]
    },

    {
        enunciado: "No âmbito tecnólogico, você possui controle da maior empresa de IA do mundo. O que você escolhe? ",
        alternativas: [{
            texto: "Fazer a tecnologia ser uma mão amiga na realização de trabalhos mais pesados e fornecer assistência para diminuir o peso no trabalho humano. Perde o emprego e vira mendigo.",
            afirmacao: "Afirmação 5"
        },
        {
            texto: " Focar na replica e produção de arte, dando liberdade para explorar os limites da criatividade artificial, assim aumentando a carga horaria trabalhada dos humanos. Se torna a pessoa mais rica do mundo.",
            afirmacao: "Afirmação 6"
        },
        ]
    }
]
 let atual = 0;
let perguntaAtual;

function mostraPerguntas() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas ();

}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        caixaAlternativas.appendChild(botaoAlternativa);

    }
}


mostraPerguntas();