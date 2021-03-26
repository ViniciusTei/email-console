#!/usr/bin/env node

sendEmail = require('./email').sendEmail
createInterface = require("readline").createInterface;

function createEmail(listaT, saudacao){
  let linha1 = `<p>${saudacao}, segue resumo das minhas atividades de hoje</p>`
  let listItem = '<ul>'

  for(let i = 0; i < listaT.length; i++) {
    listItem += `<li> ${listaT[i]}</li>`
  }

  listItem += '</ul>'

  let final = '<p>Abraco,</p>'

  return linha1 + listItem + final
}

const readLine = createInterface({
  input: process.stdin,
  output: process.stdout 
})

let salute = 'Boa noite';
readLine.question("😎 Digite a saudacao:", (resposta) => {
  salute = resposta
  readLine.close();
})

console.log("💻 Entre com as tarefas (SAIR para sair):")
let count = 1
let listaTarefas = []

// while(true) {
//   let tarefa = '';
  
//   readLine.question(`${count} > `, (res) => {
//     tarefa = res
//     readLine.close();
//   })

//   if(tarefa.toUpperCase() === 'SAIR') break

//   listaTarefas.push(tarefa)
//   count++

// }

const email = createEmail(listaTarefas, salute)

const mensagem = {
  to: [],
  from: 'vinicius.teixeira@mmtools.com.br',
  subject: 'Relatorio diario',
  html: email,
};

sendEmail(mensagem)