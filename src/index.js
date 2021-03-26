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

  //gets the prompt ready for the user input
  readLine.prompt()
  await getUserInput("😎 Digite a saudacao: ").then((res) => {
    if(salute === res) {
      salute = 'Boa noite'
    } else {
      salute = res
    }
    readLine.resume() //remember to always pause de prompt so the program can continue
  });
  
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

    //when the user types sair/SAIR it gets out of the loop
    if(tarefa.toUpperCase() === 'SAIR') break
    
    listaTarefas.push(tarefa)
    count++
    
  }
  
  Email.createHTMLEmail(listaTarefas, salute)
  console.log(Email.message)

  readLine.close()
  }
  
  main()
  