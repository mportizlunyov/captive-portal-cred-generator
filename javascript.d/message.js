import { credential } from './engine.js';

function createMessage() {
  if (credential.username == "FAILED") {
    document.getElementById('credentialUsername').textContent = "Engine failed for credential.username";
    document.getElementById('credentialEmail').textContent = "Engine failed for credential.email";
  } else {
    document.getElementById('credentialUsername').textContent = credential.username;
    document.getElementById('credentialEmail').textContent = credential.email;
  }
}

// Set add EventListner in event of button with id "generate"
document.getElementById("generateButton").addEventListener("click", createMessage);