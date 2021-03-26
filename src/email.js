#!/usr/bin/env node

sendGrid = require('@sendgrid/mail')
APP_KEY = require('../sendgrid.env').APP_KEY

async function sendEmail(msg) {
    sendGrid.setApiKey(APP_KEY);
    
    try {
      await sendGrid.send(msg);
      console.log('Email enviado!! ✨')
    } catch (error) {
      console.error(error);
  
      if (error.response) {
        console.error(error.response.body)
      }
    }
  }

exports.sendEmail = sendEmail
