#!/usr/bin/env node

const { Email } = require('./email');
rl = require("readline");

const readLine = rl.createInterface({
  input: process.stdin,
  output: process.stdout 
})

//Promisse to get user input, return the string entered
const getUserInput = (pergunta) => new Promise(resposta => readLine.question(pergunta, resposta));

async function main() {

  console.log("===========================")
  console.log("========= EMAIL🐱‍👤=========")
  console.log("===========================")
  let salute = ''
  readLine.prompt()
  await getUserInput("😎 Digite a saudacao: ").then((res) => {
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
  
  Email.createHTMLEmail(listaTarefas, salute)
  console.log(Email.message)

  readLine.close()
  }
  
  main()
  