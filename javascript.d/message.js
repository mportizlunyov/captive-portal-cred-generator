import { credential } from './engine.js';

function createMessage() {
  document.getElementById('credentialUsername').textContent = credential.username;
  document.getElementById('credentialEmail').textContent = credential.email;
}

document.getElementById("generate").addEventListener("click", createMessage);