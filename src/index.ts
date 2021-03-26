#!/usr/bin/env node

import { Email } from './email';
import { createInterface } from 'readline';

const readLine = createInterface({
  input: process.stdin,
  output: process.stdout 
})

//Promisse to get user input, return the string entered
const getUserInput = (pergunta: string) => new Promise<string>(resposta => readLine.question(pergunta, resposta));

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
  const email = new Email()

  email.createHTMLEmail(listaTarefas, salute)
  console.log(email.message)

  readLine.close()
  }
  
  main()
  