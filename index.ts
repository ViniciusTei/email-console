#!/usr/bin/env node

import {sendEmail}  from './email'
import { MailDataRequired } from '@sendgrid/mail';
import  { Prompt } from 'prompt-sync';

function createEmail(listaT: string[], saudacao: string): string {
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
const salute = Prompt("> ", 'Boa noite');

console.log("💻 Entre com as tarefas (SAIR para sair):")
let count = 1
let listaTarefas = []

while(true) {
  let tarefa = Prompt(`${count} > `)

  if(tarefa.toUpperCase() === 'SAIR') break

  listaTarefas.push(tarefa)
  count++
}

const email = createEmail(listaTarefas, salute)

const mensagem: MailDataRequired = {
  to: ['desenvolvimento@mmtools.com.br'],
  from: 'vinicius.teixeira@mmtools.com.br',
  subject: 'Relatorio diario',
  html: email,
};

sendEmail(mensagem)