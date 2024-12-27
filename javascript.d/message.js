// Javascript file to connect the engine with the HTML page
function createMessage() {
  if (credential.username == "FAILED") {
    document.getElementById('credentialUsername').textContent = "Engine failed for credential.username";
    document.getElementById('credentialEmail').textContent = "Engine failed for credential.email";
  } else {
    document.getElementById('credentialUsername').textContent = credential.username(1);
    document.getElementById('credentialEmail').textContent = credential.email(1);
    console.log("");
    console.log("");
  }
}

// Set add EventListner in event of button with id "generate"
// document.getElementById("generateButton").addEventListener("click", createMessage);
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("generateButton").addEventListener("click", createMessage);
});
