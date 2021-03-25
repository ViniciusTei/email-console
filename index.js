const prompt = require('prompt-sync')();
const sendEmail = require('./email')

function createEmail(listaT, saudacao) {
  let linha1 = `<p>${saudacao}, segue resumo das minhas atividades de hoje</p>`
  let listItem = '<ul>'

  for(let i = 0; i < listaT.length; i++) {
    listItem += `<li> ${listaT[i]}</li>`
  }

  listItem += '</ul>'

  let final = '<p>Abraco,</p>'

  return linha1 + listItem + final
}

console.log("😎 Digite a saudacao: \n .1 Bom dia\n .2 Boa tarde\n .3 Boa noite")
const salute = prompt("> ", 'Boa noite');

console.log("💻 Entre com as tarefas (SAIR para sair):")
let count = 1
let listaTarefas = []

while(true) {
  let tarefa = prompt(`${count} > `)

  if(tarefa.toUpperCase() === 'SAIR') break

  listaTarefas.push(tarefa)
  count++
}

const email = createEmail(listaTarefas, salute)

const mensagem = {
  to: ['viniciustprates@gmail.com', 'viniteixeirapa@gmail.com'],
  from: 'vinicius.teixeira@mmtools.com.br',
  subject: 'Relatorio diario',
  html: email,
};

sendEmail.sendEmail(mensagem)