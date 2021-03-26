#!/usr/bin/env node
import {send, setApiKey, MailDataRequired} from '@sendgrid/mail';
import { APP_KEY } from './enviromnent/sendgrid.env';

export class Email {
  public message: MailDataRequired;

  constructor() {
    this.message = {
      to: [],
      from: 'vinicius.teixeira@mmtools.com.br',
      subject: 'Relatorio diario',
      html: '',
    }
  }

  createHTMLEmail(listaT: string[], saudacao: string): void {
    let linha1 = `<p>${saudacao}, segue resumo das minhas atividades de hoje</p>`
    let listItem = '<ul>'
  
    for(let i = 0; i < listaT.length; i++) {
      listItem += `<li> ${listaT[i]}</li>`
    }
  
    listItem += '</ul>'
  
    let final = '<p>Abraco,</p>'
  
    this.message.html = linha1 + listItem + final
  }
  
  async sendEmail() {
    console.log("Enviando... 🤞")
    setApiKey(APP_KEY);
    
    try {
      await send(this.message);
      console.log('Email enviado!! ✨')
    } catch (error) {
      console.error(error);
  
      if (error.response) {
        console.error(error.response.body)
      }
    }
  }

}






exports.Email = Email
