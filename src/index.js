#!/usr/bin/env node

sendEmail = require('./email');
rl = require("readline");

const readLine = rl.createInterface({
  input: process.stdin,
  output: process.stdout 
})

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

const getUserInput = (pergunta) => new Promise(resposta => readLine.question(pergunta, resposta));

async function main() {

  console.log("===========================")
  console.log("========= EMAIL🐱‍👤=========")
  console.log("===========================")
  let salute = ''
  readLine.prompt()
  await getUserInput("😎 Digite a saudacao:").then((res) => {
    if(salute === res) {
      salute = 'Boa noite'
    } else {
      salute = res
    }
    readLine.resume()
  });
  
  console.log(salute)
  
  console.log("💻 Entre com as tarefas (SAIR para sair):")
  let count = 1
  let listaTarefas = []
  
  while(true) {
    let tarefa = '';
    
    await getUserInput(`${count} > `)
    .then(res => {
      tarefa= res
      readLine.resume()
    })
    if(tarefa.toUpperCase() === 'SAIR') break
    
    listaTarefas.push(tarefa)
    count++
    
  }
  
  console.log(listaTarefas)
  
  //const email = createEmail(listaTarefas, salute)
  
  // const mensagem = {
    //   to: [],
    //   from: 'vinicius.teixeira@mmtools.com.br',
    //   subject: 'Relatorio diario',
    //   html: email,
    // };
    
    //sendEmail(mensagem)
    readLine.close()
  }
  
  main()
  