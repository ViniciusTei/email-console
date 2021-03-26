#!/usr/bin/env node

sendGrid = require('@sendgrid/mail')
APP_KEY = require('../sendgrid.env').APP_KEY

const Email = {
  message: {
      to: [],
      from: 'vinicius.teixeira@mmtools.com.br',
      subject: 'Relatorio diario',
      html: '',
  },
  createHTMLEmail(listaT, saudacao){
    let linha1 = `<p>${saudacao}, segue resumo das minhas atividades de hoje</p>`
    let listItem = '<ul>'
  
    for(let i = 0; i < listaT.length; i++) {
      listItem += `<li> ${listaT[i]}</li>`
    }
  
    listItem += '</ul>'
  
    let final = '<p>Abraco,</p>'
  
    this.message.html = linha1 + listItem + final
  },
  async sendEmail() {
    console.log("Enviando... 🤞")
    sendGrid.setApiKey(APP_KEY);
    
    try {
      await sendGrid.send(this.message);
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
