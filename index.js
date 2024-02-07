const perguntas = [
    {
      pergunta: "Como se declara uma variável em JavaScript?",
      respostas: [
        "var x = 10;",
        "const x = 10;",
        "let x = 10;",
      ],
      correta: 2,
    },
    {
      pergunta: "O que o operador '===' faz em JavaScript?",
      respostas: [
        "Compara valores sem verificar o tipo.",
        "Compara valores e tipos estritos.",
        "Compara apenas tipos, não os valores.",
      ],
      correta: 1,
    },
    {
      pergunta: "Qual função é usada para imprimir algo no console em JavaScript?",
      respostas: [
        "console.print()",
        "print()",
        "console.log()",
      ],
      correta: 2,
    },
    {
      pergunta: "Como se realiza uma iteração em um array em JavaScript?",
      respostas: [
        "for (i in array)",
        "for (i = 0; i < array.length; i++)",
        "foreach (i in array)",
      ],
      correta: 1,
    },
    {
      pergunta: "O que o método 'push()' faz em arrays JavaScript?",
      respostas: [
        "Remove o último elemento do array.",
        "Adiciona um elemento no início do array.",
        "Adiciona um elemento no final do array.",
      ],
      correta: 2,
    },
    {
      pergunta: "Qual é a função do operador 'typeof' em JavaScript?",
      respostas: [
        "Verifica se duas variáveis são do mesmo tipo.",
        "Retorna o tipo de uma variável.",
        "Converte uma variável para um tipo específico.",
      ],
      correta: 1,
    },
    {
      pergunta: "O que o método 'charAt()' faz em strings JavaScript?",
      respostas: [
        "Retorna o último caractere da string.",
        "Retorna o primeiro caractere da string.",
        "Retorna o caractere em uma posição específica da string.",
      ],
      correta: 3,
    },
    {
      pergunta: "Qual é a diferença entre 'null' e 'undefined' em JavaScript?",
      respostas: [
        "São iguais, apenas representam a ausência de valor.",
        "Undefined é atribuído explicitamente, null é atribuído pelo sistema.",
        "Undefined é atribuído pelo sistema, null é atribuído explicitamente.",
      ],
      correta: 3,
    },
    {
      pergunta: "Qual é a forma correta de comentar múltiplas linhas em JavaScript?",
      respostas: [
        "// Comentário de múltiplas linhas",
        "/* Comentário de múltiplas linhas */",
        "# Comentário de múltiplas linhas #",
      ],
      correta: 2,
    },
    {
      pergunta: "O que o operador '++' faz em JavaScript?",
      respostas: [
        "Aumenta o valor da variável em 1.",
        "Diminui o valor da variável em 1.",
        "Dobra o valor da variável.",
      ],
      correta: 1,
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  const corretas = new Set()
  const totalDePerguntas =perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  for(const item of perguntas){
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
    
  
  for(let resposta of item.respostas){
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name','pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.target.value == item.correta
      corretas.delete(item)
      if(estaCorreta) {
        corretas.add(item)
    }
      mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
    }
    quizItem.querySelector('dl').appendChild(dt)
  }
  quizItem.querySelector('dl dt').remove()
  quiz.appendChild(quizItem)
  }