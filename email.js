#!/usr/bin/env node

const sgMail = require('@sendgrid/mail');
const API_KEY = require('./sendgrid.env').API_KEY;

const sE = async (msg) => {
    sgMail.setApiKey(API_KEY);
    
    try {
      await sgMail.send(msg);
      console.log('Email enviado!! ✨')
    } catch (error) {
      console.error(error);
  
      if (error.response) {
        console.error(error.response.body)
      }
    }
  }

exports.sendEmail = sE