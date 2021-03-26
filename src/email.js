#!/usr/bin/env node

import { setApiKey, send } from '@sendgrid/mail';
import { APP_KEY} from '../sendgrid.env';

export async function sendEmail(msg) {
    setApiKey(APP_KEY);
    
    try {
      await send(msg);
      console.log('Email enviado!! ✨')
    } catch (error) {
      console.error(error);
  
      if (error.response) {
        console.error(error.response.body)
      }
    }
  }
